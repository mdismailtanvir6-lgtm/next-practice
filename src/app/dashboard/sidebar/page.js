
"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>

      <nav className="flex flex-col gap-3">
        <Link href="/dashboard" className="hover:text-gray-300">Home</Link>
        <Link href="/dashboard/content" className="hover:text-gray-300">Content</Link>
        <Link href="/dashboard/settings" className="hover:text-gray-300">Settings</Link>
        <Link href="/dashboard/admin" className="hover:text-gray-300">Admin</Link>
      </nav>
    </div>
  );
}