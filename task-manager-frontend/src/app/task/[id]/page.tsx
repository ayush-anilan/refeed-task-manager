"use client";
import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { fetchTaskById, deleteTask } from "../../../redux/taskSlice";
import { RootState, AppDispatch } from "../../../redux/store";
import Link from "next/link";

export default function TaskDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const { task, loading, error } = useSelector(
    (state: RootState) => state.tasks
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchTaskById(id as string));
    }
  }, [dispatch, id]);

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this task?")) return;
    dispatch(deleteTask(id as string));
    router.push("/");
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-500 text-lg">Loading task details...</p>
      </div>
    );
  }

  if (!task || error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500 text-lg">{error || "Task not found."}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-2xl bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-4">
          {task.title}
        </h1>
        <p className="text-gray-700 text-lg mb-4">{task.description}</p>
        <p
          className={`text-sm font-semibold py-1 px-3 inline-block rounded-full ${
            task.status === "completed"
              ? "bg-green-200 text-green-800"
              : task.status === "in-progress"
              ? "bg-yellow-200 text-yellow-800"
              : "bg-red-200 text-red-800"
          }`}
        >
          Status: {task.status}
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <Link href={`/task/${task._id}/edit`}>
            <button className="px-5 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition">
              ✏️ Edit Task
            </button>
          </Link>
          <button
            onClick={handleDelete}
            className="px-5 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition"
          >
            🗑️ Delete Task
          </button>
          <Link href="/">
            <button className="px-5 py-2 bg-gray-400 text-white font-semibold rounded-lg shadow-md hover:bg-gray-500 transition">
              🔙 Back to Tasks
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
