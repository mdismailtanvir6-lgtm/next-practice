// import connectDB from "@/lib/mongodb";
// import Blog from "@/models/Blog";

// export default async function sitemap() {
//   const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

//   await connectDB();

//   // 🔥 1. Only published blogs + optimized query
//   const blogs = await Blog.find(
//     { status: "published" }, // filter published only
//     { slug: 1, updatedAt: 1, _id: 0 },
//   )
//     .sort({ updatedAt: -1 })
//     .lean();

//   // 🧱 2. Static routes
//   const staticRoutes = [
//     {
//       url: `${baseUrl}/`, // for home page
//       lastModified: new Date(),
//       changeFrequency: "daily",
//       priority: 1.0,
//     },
//     {
//       url: `${baseUrl}/products`, // for proucts page
//       lastModified: new Date(),
//       changeFrequency: "weekly",
//       priority: 0.8,
//     },
//     {
//       url: `${baseUrl}/blogContent`, // for blog page
//       lastModified: new Date(),
//       changeFrequency: "weekly",
//       priority: 0.9,
//     },
//   ];

//   // 🧠 3. Dynamic blog routes
//   const blogRoutes = blogs.map((blog) => ({
//     url: `${baseUrl}/blogContent/${blog.slug}`,
//     lastModified: blog.updatedAt || new Date(),
//     changeFrequency: "weekly",
//     priority: 0.7,
//   }));

//   // 🧠 4. Dynamic products routes
// //   const productRoutes = products?.map((product) => ({
// //     url: `${baseUrl}/product/${product.slug}`,
// //     lastModified: blog.updatedAt || new Date(),
// //     changeFrequency: "weekly",
// //     priority: 0.7,
// //   }));

//   return [...staticRoutes, ...blogRoutes];
// //   return [...staticRoutes, ...blogRoutes, ...productRoutes];
// }
