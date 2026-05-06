"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function AdminPage() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
    stock: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addProduct = async () => {
    const res = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...form,
        price: Number(form.price),
        stock: Number(form.stock),
      }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Product added!");
      setForm({
        name: "",
        price: "",
        category: "",
        image: "",
        stock: "",
        description: "",
      });
    } else {
      alert("Failed!");
    }
  };

  return (
    <div>
      <h1>Admin Panel</h1>

      <input
        name="name"
        placeholder="Product Name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        name="price"
        placeholder="Price"
        value={form.price}
        onChange={handleChange}
      />

      <input
        name="category"
        placeholder="Category"
        value={form.category}
        onChange={handleChange}
      />

      <input
        name="image"
        placeholder="Image URL"
        value={form.image}
        onChange={handleChange}
      />

      <input
        name="stock"
        placeholder="Stock"
        value={form.stock}
        onChange={handleChange}
      />

      <input
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
      />

      <Button onClick={addProduct}>Add Product</Button>
    </div>
  );
}
