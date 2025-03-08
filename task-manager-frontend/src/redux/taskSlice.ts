import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Task {
  _id: string;
  title: string;
  description: string;
  status: "pending" | "in-progress" | "completed";
}

interface TaskState {
  tasks: Task[];
  task: Task | null;
  loading: boolean;
  error: string | null;
}

const initialState: TaskState = {
  tasks: [],
  task: null, // Store a single task separately
  loading: false,
  error: null,
};

const API_URL = "http://localhost:5000/tasks";

// Fetch all tasks
export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    return rejectWithValue("Failed to fetch tasks");
  }
});

// Fetch task by ID
export const fetchTaskById = createAsyncThunk("tasks/fetchTaskById", async (id: string, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    return rejectWithValue("Failed to fetch task");
  }
});

// Add Task
export const addTask = createAsyncThunk("tasks/addTask", async (task: Omit<Task, "_id">, { rejectWithValue }) => {
  try {
    const response = await axios.post(API_URL, task);
    return response.data;
  } catch (error) {
    return rejectWithValue("Failed to add task");
  }
});

// Update Task
export const updateTask = createAsyncThunk(
  "tasks/updateTask",
  async ({ id, task }: { id: string; task: Partial<Task> }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, task);
      return response.data;
    } catch (error) {
      return rejectWithValue("Failed to update task");
    }
  }
);

// Delete Task
export const deleteTask = createAsyncThunk("tasks/deleteTask", async (id: string, { rejectWithValue }) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    return id;
  } catch (error) {
    return rejectWithValue("Failed to delete task");
  }
});

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    clearTask: (state) => {
      state.task = null; // Clear the selected task
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch all tasks
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action: PayloadAction<Task[]>) => {
        state.tasks = action.payload;
        state.loading = false;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Fetch task by ID
      .addCase(fetchTaskById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTaskById.fulfilled, (state, action: PayloadAction<Task>) => {
        state.task = action.payload;
        state.loading = false;
      })
      .addCase(fetchTaskById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Add task
      .addCase(addTask.fulfilled, (state, action: PayloadAction<Task>) => {
        state.tasks.push(action.payload);
      })
      .addCase(addTask.rejected, (state, action) => {
        state.error = action.payload as string;
      })

      // Update task
      .addCase(updateTask.fulfilled, (state, action: PayloadAction<Task>) => {
        const index = state.tasks.findIndex((task) => task._id === action.payload._id);
        if (index !== -1) {
          state.tasks[index] = action.payload;
        }
      })
      .addCase(updateTask.rejected, (state, action) => {
        state.error = action.payload as string;
      })

      // Delete task
      .addCase(deleteTask.fulfilled, (state, action: PayloadAction<string>) => {
        state.tasks = state.tasks.filter((task) => task._id !== action.payload);
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export const { clearTask } = taskSlice.actions;
export default taskSlice.reducer;
