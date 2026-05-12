"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BlogModal({
  blog,
  closeModal,
}) {
  const router = useRouter();

  const [title, setTitle] = useState(
    blog.title
  );

  const [content, setContent] = useState(
    blog.content
  );


  const [thumbnail, setThumbnail] =
    useState(blog.thumbnail);

  // Update Blog
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `/api/blog/${blog.slug}`,
        {
          method: "PUT",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            title,
            content,
            thumbnail,
          }),
        }
      );

      if (!res.ok) {
        throw new Error(
          "Failed to update blog"
        );
      }

      closeModal();

      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg p-6 rounded-xl">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-bold">
            Edit Blog
          </h2>

          <button
            onClick={closeModal}
            className="text-red-500 text-lg"
          >
            ✕
          </button>
        </div>

        <form
          onSubmit={handleUpdate}
          className="space-y-4"
        >
          {/* Title */}
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            className="w-full border p-3 rounded-lg"
          />

          {/* Content */}
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) =>
              setContent(e.target.value)
            }
            className="w-full border p-3 rounded-lg h-32"
          />

          {/* Thumbnail */}
          <input
            type="text"
            placeholder="Thumbnail URL"
            value={thumbnail}
            onChange={(e) =>
              setThumbnail(e.target.value)
            }
            className="w-full border p-3 rounded-lg"
          />

          {/* Buttons */}
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={closeModal}
              className="px-4 py-2 border rounded-lg"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}