// app/api/auth/register/[id]/route.js
import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";

// UPDATE USER
export async function PUT(req, { params }) {
  try {
    await connectDB();
    const { id } = await params;

    const body = await req.json();

    const updatedUser = await User.findByIdAndUpdate(id,
      {
        name: body.name,
        email: body.email,
      },
      {
        new: true,
      },
    );

    return NextResponse.json({
      success: true,
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to update user",
      },
      {
        status: 500,
      },
    );
  }
}

// DELETE USER
export async function DELETE(req, { params }) {
  try {
    await connectDB();
    const { id } = await params;

    await User.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete user",
      },
      {
        status: 500,
      },
    );
  }
}
