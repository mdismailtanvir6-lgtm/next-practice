// import { ImageResponse } from "next/og";
// import { getSingleBlog } from "@/lib/blogs";

// export const runtime = "edge";

// export async function GET(req, { params }) {
//    const { slug } = await params;
 
//    // get blog using helper function
//    const blog =  getSingleBlog(slug);

//   return new ImageResponse(
//     (
//       <div
//         style={{
//           width: "1200px",
//           height: "630px",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           background: "#0f172a",
//           color: "white",
//           fontSize: 60,
//           padding: 40,
//           textAlign: "center",
//         }}
//       >
//         <div style={{ fontSize: 40, opacity: 0.8 }}>My Blog Site</div>
//         <h1>{blog?.title || "Blog"}</h1>
//       </div>
//     ),
//     {
//       width: 1200,
//       height: 630,
//     }
//   );
// }npm 