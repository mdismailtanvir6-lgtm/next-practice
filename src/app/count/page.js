"use client";

import { useEffect, useState } from "react";

export default function Counter({ target = 100000000000000000000000000000000000000000, duration = 2000}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0; // Start from a lower number for better animation
    const increment = target / (duration / 16); // ~60fps

    const timer = setInterval(() => {
      start += increment;

      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <h1 className="text-4xl font-bold text-center">
      {count.toLocaleString()}
    </h1>
  );
}