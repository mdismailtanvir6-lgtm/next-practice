// app/blog/[slug]/page.jsx
import connectDB from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { notFound } from "next/navigation";

export default async function BlogDetails({ params }) {
  await connectDB();
  const { slug } = await params;

  const blog = await Blog.findOne({ slug });

  if (!blog) return notFound();

  return (
    <div className="container mx-auto my-20 flex flex-col gap-y-10 px-0 md:px-10 lg:px-20">
      <h2 className="font-bold text-2xl text-center">{blog.title}</h2>
      <picture className="w-full  rounded-lg">
        <img src={blog.thumbnail} alt={blog.thumbnail} />
      </picture>
      <p className="text-gray-400 text-justify">
        {blog.content}
      </p>
    </div>
  );
}
