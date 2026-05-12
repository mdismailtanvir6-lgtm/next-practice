//  app/blog/components/BlogModal.jsx
"use client";
import { useState, useEffect } from "react";

function BlogModal({ open, setOpen, editMode, selectedSlug, form, setForm, refresh }) {

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (editMode) {
      await fetch(`/api/blog/${selectedSlug}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } else {
      await fetch("/api/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    }

    setOpen(false);
    refresh();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded w-[500px] text-black">
        <h2 className="text-xl font-bold mb-4">
          {editMode ? "Update Blog" : "Add Blog"}
        </h2>

        <input name="title" value={form.title} onChange={handleChange} className="w-full border p-2 mb-2 text-black" placeholder="Title" />
        <textarea name="content" value={form.content} onChange={handleChange} className="w-full border p-2 mb-2 text-black" placeholder="Content" />
        <input name="thumbnail" value={form.thumbnail} onChange={handleChange} className="w-full border p-2 mb-2 text-black" placeholder="Thumbnail" />
        <input name="category" value={form.category} onChange={handleChange} className="w-full border p-2 mb-2 text-black" placeholder="Category" />

        <div className="flex justify-end gap-2">
          <button onClick={() => setOpen(false)} className="px-3 py-2 bg-gray-400 text-white rounded">Cancel</button>
          <button onClick={handleSubmit} className="px-3 py-2 bg-blue-600 text-white rounded">
            {editMode ? "Update" : "Create"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogModal;