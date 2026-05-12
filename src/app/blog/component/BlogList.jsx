// app/blog/components/BlogList.jsx
function BlogList({ blogs, loading, onEdit, onDelete }) {
  if (loading) return <p>Loading...</p>;

  return (
    <div className="grid gap-4">
      {blogs.map((blog) => (
        <div key={blog._id} className="border p-4 rounded flex justify-between">
          <div>
            <h2 className="font-bold text-lg">{blog.title}</h2>
            <p className="text-sm text-gray-500">{blog.slug}</p>
          </div>

          <div className="flex gap-2">
            <button onClick={() => onEdit(blog.slug)} className="px-3 py-1 bg-green-500 text-white rounded">
              Edit
            </button>
            <button onClick={() => onDelete(blog.slug)} className="px-3 py-1 bg-red-500 text-white rounded">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogList;