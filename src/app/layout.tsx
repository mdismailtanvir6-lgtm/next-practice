import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ========== metadata for seo ===========
// export const metadata = {
//   metadataBase: new URL(
//     process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
//   ),
//   title: {
//     default: "My Blog Site",
//     template: "%s | My Blog Site",
//   },

//   description: "Learn MERN, Next.js, React and modern web development tutorials",

//   openGraph: {
//     title: "My Blog Site",
//     description: "Learn modern web development tutorials",
//     url: "http://localhost:3000",
//     siteName: "My Blog Site",
//     type: "website",

//     images: [
//       {
//         url: "/og/default.png",
//         width: 1200,
//         height: 630,
//         alt: "My Blog Site",
//       },
//     ],
//   },

//   robots: {
//     index: true,
//     follow: true,
//   },

//   icons: {
//     icon: "/favicon.ico",
//   },
// };

// ======== main layout page ==========

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
