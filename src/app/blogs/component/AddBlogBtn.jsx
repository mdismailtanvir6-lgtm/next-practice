"use client"
import React, { useState } from "react";
import BlogModal from "./BlogModal";

const AddBlogBtn = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div>
        <button
          onClick={() => setOpenModal(true)}
          className="bg-blue-600 hover:bg-blue-700 transition-all cursor-pointer text-white px-4 py-2 rounded-lg"
        >
          Add Blog
        </button>
      </div>

      {openModal && <BlogModal closeModal={()=> setOpenModal(false)}></BlogModal>}
    </>
  );
};

export default AddBlogBtn;
