//  app/blog/page.js
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
// import getBlogs from "@/lib/blogs";

// export const metadata = {
//   title: "All Blogs",
//   description: "Read all programming blogs",
// };

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [modalOpen, setModalOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedSlug, setSelectedSlug] = useState(null);

  const [form, setForm] = useState({
    title: "",
    content: "",
    thumbnail: "",
    category: "General",
    author: "Admin",
    published: true,
  });

  // Fetch blogs
  const fetchBlogs = async () => {
    setLoading(true);
    const res = await fetch("/api/blog");
    const data = await res.json();
    setBlogs(data.data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Handle input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Open create modal
  const openCreate = () => {
    setEditMode(false);
    setForm({
      title: "",
      content: "",
      thumbnail: "",
      category: "General",
      author: "Admin",
      published: true,
    });
    setModalOpen(true);
  };

  // Open edit modal
  const openEdit = (blog) => {
    setEditMode(true);
    setSelectedSlug(blog.slug);
    setForm({
      title: blog.title,
      content: blog.content,
      thumbnail: blog.thumbnail,
      category: blog.category,
      author: blog.author,
      published: blog.published,
    });
    setModalOpen(true);
  };

  // Submit create/update
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

    setModalOpen(false);
    await fetchBlogs();
  };

  // Delete blog
  const handleDelete = async (slug) => {
    await fetch(`/api/blog/${slug}`, {
      method: "DELETE",
    });

    await fetchBlogs();
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold">Blogs</h3>
        <button
          onClick={openCreate}
          className="bg-blue-600 hover:bg-blue-700 transition-all cursor-pointer text-white px-4 py-2 rounded-lg"
        >
          Add Blog
        </button>
      </div>

      {/* Blog List */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="border border-gray-400 p-4 rounded-lg"
            >
              {/* ===== blog content ==== */}
              <div className="space-y-4">
                <h2 className="font-bold text-lg">{blog.title}</h2>
                <Link href={`/blog/${blog.slug}`}>
                  <p className="text-gray-400 text-justify line-clamp-3 hover:text-gray-500 cursor-pointer">
                    {blog.content}
                  </p>
                </Link>
                <Link href={`/blog/${blog.slug}`} className="mt-5 rounded-lg">
                  {/* <Image
                    src={blog?.thumbnail}
                    alt={blog?.title}
                    width={400}
                    height={250}
                    className="rounded-lg object-cover"
                  /> */}
                  <img className="rounded-lg" src={blog.thumbnail} alt={blog.thumbnail}/>
                </Link>
              </div>

              {/* ====== blog action ======= */}
              <div className="mt-10 flex gap-4">
                <button
                  onClick={() => openEdit(blog)}
                  className="px-3 py-1 bg-green-500 text-white rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(blog.slug)}
                  className="px-3 py-1 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded w-[500px]">
            <h2 className="text-xl font-bold mb-4">
              {editMode ? "Update Blog" : "Add Blog"}
            </h2>

            <input
              name="title"
              placeholder="Title"
              value={form.title}
              onChange={handleChange}
              className="w-full border p-2 mb-2"
            />

            <textarea
              name="content"
              placeholder="Content"
              value={form.content}
              onChange={handleChange}
              className="w-full border p-2 mb-2"
            />

            <input
              name="thumbnail"
              placeholder="Thumbnail URL"
              value={form.thumbnail}
              onChange={handleChange}
              className="w-full border p-2 mb-2"
            />

            <input
              name="category"
              placeholder="Category"
              value={form.category}
              onChange={handleChange}
              className="w-full border p-2 mb-2"
            />

            <div className="flex gap-2 justify-end">
              <button
                onClick={() => setModalOpen(false)}
                className="px-3 py-2 bg-gray-400 text-white rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-3 py-2 bg-blue-600 text-white rounded"
              >
                {editMode ? "Update" : "Create"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
