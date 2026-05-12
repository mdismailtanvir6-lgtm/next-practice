"use client"
import React from "react";

const page = () => {
  const handleLogout = async () => {
    const res = await fetch("/api/auth/logout", {
      method: "POST",
    });

    const data = await res.json();

    if (data.success) {
      window.location.href = "/signIn";
    }
  };
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default page;
