import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();

  return NextResponse.json({
    message:
      "Hello from test/route.js, MongoDB Database connected successfully !",
      success: true,
      data : {
        name : "ismail Hossain",
        email : "ismail@example.com",
      },
      metadata : {
        totalPage : 10,
        currentPage : 1,
        limit : 3,
      },
  });
}
