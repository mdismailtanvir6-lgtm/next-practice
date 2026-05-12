// app/blogs/page
import { getBlogs } from "@/lib/blogs";
import BlogList from "./component/BlogList";
import AddBlogBtn from "./component/AddBlogBtn";

export default async function BlogsPage() {
  const blogs = await getBlogs();

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div>
        <h2>Blog</h2>
        <AddBlogBtn></AddBlogBtn>
      </div>
      <BlogList blogs={blogs} />
    </div>
  );
}
