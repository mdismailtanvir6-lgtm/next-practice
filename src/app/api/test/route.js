// api/test/route.js
import connectDB from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();

    return NextResponse.json({
      message:
        "Hello from test/route.js, MongoDB Database connected successfully!",
      success: true,
      data: {
        name: "Ismail Hossain",
        email: "ismail@example.com",
      },
      metadata: {
        totalPage: 10,
        currentPage: 1,
        limit: 3,
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Database connection failed",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
