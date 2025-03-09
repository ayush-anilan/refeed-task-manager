import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HomePage from "../app/page";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../redux/taskSlice"; // Import the real task reducer
import { useRouter } from "next/navigation";

// Mock Next.js router
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

const createMockStore = (preloadedState: any) =>
  configureStore({
    reducer: taskReducer,
    preloadedState,
  });

describe("HomePage", () => {
  it("renders the loading state correctly", () => {
    const store = createMockStore({
      tasks: {
        tasks: [],
        loading: true, // Simulating loading state
      },
    });

    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  it("renders the home page correctly with tasks", () => {
    const store = createMockStore({
      tasks: {
        tasks: [
          { _id: "1", title: "Task 1", status: "completed" },
          { _id: "2", title: "Task 2", status: "in-progress" },
        ],
        loading: false, // Simulating data loaded
      },
    });

    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );

    // Check if the heading appears
    expect(screen.getByTestId("heading")).toBeInTheDocument();
    expect(screen.getByText("Task Manager")).toBeInTheDocument();

    // Check if tasks are displayed correctly
    expect(screen.getByText("Task 1")).toBeInTheDocument();
    expect(screen.getByText("Task 2")).toBeInTheDocument();
    expect(screen.getByText(/Status: completed/i)).toBeInTheDocument();
    expect(screen.getByText(/Status: in-progress/i)).toBeInTheDocument();
  });

  jest.mock(
    "next/link",
    () =>
      ({ children }) =>
        children
  ); // Mock next/link

  test("renders 'Add New Task' button and checks navigation", async () => {
    // Mock useRouter
    const pushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: pushMock });

    // Create mock Redux store
    const mockState = {
      tasks: {
        tasks: [{ _id: "1", title: "Test Task", status: "in-progress" }],
        loading: false,
      },
    };

    const store = createMockStore(mockState);

    // Render the component
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );

    // Get the "Add New Task" button
    const addButton = screen.getByText("➕ Add New Task");

    // Simulate a click event
    await userEvent.click(addButton);

    // Verify if navigation was triggered
    expect(pushMock).toHaveBeenCalledWith("/new");
  });
});
