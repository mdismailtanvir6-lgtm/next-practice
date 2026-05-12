// app/users/[id]/page.js

import connectDB from "@/lib/mongodb";
import User from "@/models/User";

export default async function SingleUserPage({ params }) {
  await connectDB();
  const { id } = await params;

  const user = await User.findById(id);

  if (!user) {
    return <p>User not found</p>;
  }

  console.log(user?.createdAt);
  

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{user.name}</h1>
      <p>{user.email}</p>
    </div> 
  );
}
