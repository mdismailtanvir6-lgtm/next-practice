"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import BlogModal from "./BlogModal";

export default function BlogActions({ blog }) {
  const router = useRouter();

  const [openModal, setOpenModal] =
    useState(false);

  // Delete
  const handleDelete = async () => {
    try {
      await fetch(`/api/blog/${blog.slug}`, {
        method: "DELETE",
      });

      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="mt-6 flex gap-3">
        <button
          onClick={() => setOpenModal(true)}
          className="px-4 py-2 bg-green-500 text-white rounded-lg"
        >
          Edit
        </button>

        <button
          onClick={handleDelete}
          className="px-4 py-2 bg-red-500 text-white rounded-lg"
        >
          Delete
        </button>
      </div>

      {/* Modal */}
      {openModal && (
        <BlogModal
          blog={blog}
          closeModal={() =>
            setOpenModal(false)
          }
        />
      )}
    </>
  );
}