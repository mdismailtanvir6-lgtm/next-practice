// app/users/page.js
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "../../components/ui/Button";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("/api/auth/register");
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.log("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <p className="p-5">Loading users...</p>;
  }

  // ==== handle delete ======
  const handleDelete = async (id) => {
    const confirmDelete = confirm("Are you sure?");

    if (!confirmDelete) return;

    try {
      const res = await fetch(`/api/auth/register/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        throw new Error("Failed to delete user");
      }

      const data = await res.json();

      console.log(data);

      // UI update
      setUsers((prev) => prev.filter((user) => user._id !== id));
    } catch (error) {
      console.log("Delete error:", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Users</h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Created At</th>
              <th className="p-2 border">Details</th>
              <th className="p-2 border">Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="text-center">
                <td className="p-2 border">{user.name}</td>
                <td className="p-2 border">{user.email}</td>
                <td className="p-2 border">
                  {new Date(user.createdAt).toLocaleString()}
                </td>
                <td className="p-2 border">
                  {" "}
                  <Link href={`/users/${user._id}`}>
                    <Button variant="secondary">Details</Button>
                  </Link>
                </td>
                <td className="p-2 border">
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
