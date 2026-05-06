"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function NavigationDemo() {
  const router = useRouter();
  const pathname = usePathname();

  // fake auth state
  const isLoggedIn = false;

  // programmatic navigation
  const handleCheckout = () => {
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      router.push("/checkout");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🚀 Navigation System Demo</h1>

      {/* ---------------- NAVBAR ---------------- */}
      <nav style={{ marginBottom: "20px" }}>
        <Link
          href="/"
          style={{
            marginRight: "10px",
            color: pathname === "/" ? "red" : "white",
          }}
        >
          Home
        </Link>

        <Link
          href="/about"
          style={{
            marginRight: "10px",
            color: pathname === "/about" ? "red" : "white",
          }}
        >
          About
        </Link>

        <Link
          href="/contact"
          style={{
            marginRight: "10px",
            color: pathname === "/contact" ? "red" : "white",
          }}
        >
          Contact
        </Link>
        <Link
          href="/route"
          style={{
            marginRight: "10px",
            color: pathname === "/route" ? "red" : "white",
          }}
        >
          Route
        </Link>
      </nav>

      {/* ---------------- CURRENT PATH ---------------- */}
      <p>📍 Current Path: {pathname}</p>


      {/* ---------------- useRouter ---------------- */}
      <div style={{ marginTop: "20px" }}>
        <h3>⚡ useRouter Navigation</h3>

        <button
          onClick={() => router.push("/dashboard")}
          style={{ marginRight: "10px" , border: "1px solid white", padding: "5px 10px" }}
        >
          Go Dashboard
        </button>

        <button onClick={() => router.back()}>
          ⬅ Go Back
        </button>
        <button onClick={() => router.refresh() } style={{ marginLeft: "10px" , border: "1px solid white", padding: "5px 10px" }}>
          🔄 Reload Page
        </button>
        <button onClick={() => router.replace("/") } style={{ marginLeft: "10px" , border: "1px solid white", padding: "5px 10px" }}>
          🔄 Replace Page
        </button>
      </div>

      {/* ---------------- Programmatic Navigation ---------------- */}
      <div style={{ marginTop: "20px" }}>
        <h3>🧠 Programmatic Navigation</h3>

        <button onClick={handleCheckout}>
          Go to Checkout (Auth Check)
        </button>
      </div>
    </div>
  );
}