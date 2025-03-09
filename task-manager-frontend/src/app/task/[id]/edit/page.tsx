"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../../redux/store";
import { updateTask, fetchTasks } from "../../../../redux/taskSlice";

export default function EditTaskPage() {
  const { id } = useParams();
  const taskId = id as string;
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  // Get task details from Redux state
  const taskFromStore = useSelector((state: RootState) =>
    state.tasks.tasks.find((task) => task._id === id)
  );

  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "pending" as "pending" | "in-progress" | "completed",
  });

  useEffect(() => {
    if (!taskFromStore) {
      dispatch(fetchTasks());
    } else {
      setTask(taskFromStore);
    }
  }, [taskFromStore, dispatch]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!taskId) return;
    await dispatch(updateTask({ id: taskId, task })).unwrap();
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-lg w-full bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-4">
          ✏️ Edit Task
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title Input */}
          <div>
            <label className="block text-black font-semibold mb-1">Title</label>
            <input
              className="border text-black p-2 w-full rounded focus:ring-2 focus:ring-blue-400"
              value={task.title}
              onChange={(e) => setTask({ ...task, title: e.target.value })}
              required
            />
          </div>

          {/* Description Input */}
          <div>
            <label className="block text-black font-semibold mb-1">
              Description
            </label>
            <textarea
              className="border text-black p-2 w-full rounded focus:ring-2 focus:ring-blue-400"
              value={task.description}
              onChange={(e) =>
                setTask({ ...task, description: e.target.value })
              }
              required
            />
          </div>

          {/* Status Dropdown */}
          <div>
            <label className="block text-black font-semibold mb-1">
              Status
            </label>
            <select
              className="border text-black p-2 w-full rounded focus:ring-2 focus:ring-blue-400"
              value={task.status}
              onChange={(e) =>
                setTask({
                  ...task,
                  status: e.target.value as
                    | "pending"
                    | "in-progress"
                    | "completed",
                })
              }
            >
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold shadow-md transition"
              type="submit"
            >
              ✅ Update Task
            </button>
            <button
              type="button"
              className="bg-gray-400 hover:bg-gray-500 text-white px-5 py-2 rounded-lg font-semibold shadow-md transition"
              onClick={() => router.push("/")}
            >
              🔙 Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
