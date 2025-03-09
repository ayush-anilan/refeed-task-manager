"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { addTask } from "../../redux/taskSlice";

export default function NewTaskPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pending");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{
    title?: string;
    description?: string;
  }>({});
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { title?: string; description?: string } = {};

    if (!title.trim()) newErrors.title = "Title is required!";
    if (!description.trim()) newErrors.description = "Description is required!";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setLoading(true);
    setErrors({}); // Clear errors if valid

    try {
      await dispatch(
        addTask({
          title,
          description,
          status: status as "pending" | "in-progress" | "completed",
        })
      ).unwrap();
      router.push("/");
    } catch (error) {
      console.error("Error creating task:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-lg w-full bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-4">
          📝 Create New Task
        </h1>
        <form
          data-testid="task-form"
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          {/* Title Input */}
          <div>
            <label className="block text-black font-semibold mb-1">Title</label>
            <input
              className="border text-black p-2 w-full rounded focus:ring-2 focus:ring-green-400"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter task title"
              required
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title}</p>
            )}
          </div>

          {/* Description Input */}
          <div>
            <label className="block text-black font-semibold mb-1">
              Description
            </label>
            <textarea
              className="border text-black p-2 w-full rounded focus:ring-2 focus:ring-green-400"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter task description"
              required
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">{errors.description}</p>
            )}
          </div>

          {/* Status Dropdown */}
          <div>
            <label className="block text-black font-semibold mb-1">
              Status
            </label>
            <select
              className="border text-black p-2 w-full rounded focus:ring-2 focus:ring-green-400"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            <button
              className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg font-semibold shadow-md transition flex-1"
              type="submit"
              disabled={loading}
            >
              {loading ? "Creating..." : "✅ Create Task"}
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
