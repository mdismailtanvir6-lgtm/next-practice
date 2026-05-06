// import mongoose from "mongoose";

// export async function connectDB() {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("✅ MongoDB Connected from lib/mongodb.js");
//   } catch (err) {
//     console.log("❌ Error:", err);
//   }
// }


import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("❌ Please define MONGO_URI in .env.local");
}

// global cache (Next.js hot reload fix)
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = {
    conn: null,
    promise: null,
  };
}

export async function connectDB() {
  // ✅ already connected
  if (cached.conn) {
    return cached.conn;
  }

  // ✅ if no connection is in progress
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_URI, {
      bufferCommands: false, // Disable buffering to prevent hanging
    });
  }

  try {
    // ✅ wait for connection (important)
    cached.conn = await cached.promise;
    console.log("✅ MongoDB Connected");
  } catch (error) {
    cached.promise = null; // retry possible
    console.log("❌ MongoDB Error:", error);
    // throw error;
  }

  return cached.conn;
}
