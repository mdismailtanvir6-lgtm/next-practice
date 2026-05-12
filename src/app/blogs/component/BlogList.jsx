import Image from "next/image";
import Link from "next/link";
import BlogAction from "./BlogAction";

export default function BlogList({ blogs }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {blogs.map((blog) => (
        <div key={blog._id} className="border border-gray-400 p-4 rounded-lg">

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
          <BlogAction blog={blog} />
        </div>
      ))}
    </div>
  );
}


