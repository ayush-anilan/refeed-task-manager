"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../redux/taskSlice";
import Link from "next/link";
import { RootState, AppDispatch } from "../redux/store";

export default function HomePage() {
  const dispatch = useDispatch<AppDispatch>();
  const { tasks, loading } = useSelector((state: RootState) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Page Container */}
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1
          className="text-3xl font-extrabold text-gray-800 mb-6 text-center"
          data-testid="heading"
        >
          Task Manager
        </h1>

        {/* Loading State */}
        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : (
          <ul className="space-y-4">
            {tasks.map((task) => (
              <li
                key={task._id}
                className="p-4 bg-gray-50 border-l-4 rounded-lg shadow-md hover:bg-gray-100 transition border-blue-500"
              >
                <Link href={`/task/${task._id}`} className="block">
                  <p className="font-semibold text-lg text-gray-800 hover:underline">
                    {task.title}
                  </p>
                </Link>
                <p
                  className={`text-sm font-medium mt-1 ${
                    task.status === "completed"
                      ? "text-green-600"
                      : task.status === "in-progress"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                >
                  Status: {task.status}
                </p>
              </li>
            ))}
          </ul>
        )}

        {/* Add New Task Button */}
        <div className="mt-6 text-center">
          <Link href="/new">
            <button className="px-5 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition">
              ➕ Add New Task
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
