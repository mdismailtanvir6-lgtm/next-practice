// app/api/auth/register/route.js
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    await connectDB();

    // Check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name : name,
      email : email,
      password: hashedPassword,
    });
    console.log("Saved user:", user);

    return NextResponse.json({ message: "User created" });
  } catch (error) {
    return NextResponse.json(
      { message: "Error creating user" },
      { status: 500 }
    );
  }
}

// import connectDB from "@/lib/mongodb";
// import User from "@/models/User";
// import bcrypt from "bcrypt";

// export async function POST(req) {
//   try {
//     const { name, email, password } = await req.json();

//     await connectDB();

//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return Response.json({ message: "User already exists" }, { status: 400 });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const user = await User.create({
//       name,
//       email,
//       password: hashedPassword,
//     });

//     return Response.json({ message: "User created", user });
//   } catch (error) {
//     return Response.json({ error: error.message }, { status: 500 });
//   }
// }