// src/middleware.js
import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("token")?.value;

  const pathname = request.nextUrl.pathname;

  const protectedRoutes = ["/blog", "/dashboard", "/profile"];

  const protectedPath = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  // Protect private routes
  if (!token && protectedPath) {
    return NextResponse.redirect(new URL("/signIn", request.url));
  }

  // Prevent logged-in users from visiting signIn
  if (token && pathname === "/signIn") {
    return NextResponse.redirect(new URL("/blog", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/blog/:path*",
    "/dashboard/:path*",
    "/profile/:path*",
    "/signIn",
  ],
};