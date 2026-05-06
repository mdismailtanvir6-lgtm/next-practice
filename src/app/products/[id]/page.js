// app/products/[id]/page.jsx

import { notFound } from "next/navigation";
// const product_URL = "https://fakestoreapi.com/products";
const product_URL = "http://localhost:3000/api/products";  


async function getProduct(id) {
  const res = await fetch(`${product_URL}/${id}`, {
    next: { revalidate: 60 }, // 1 minute পর update
  });

  if (!res.ok) return null;
 
  return res.json();
}

export default async function ProductDetails({ params }) {
  const { id } = await params;

  const product = await getProduct(id);

  if (!product) return notFound();

  return (
    <div style={{ padding: "20px" }}>
      <h1>{product.title}</h1>

      <img src={product.image} alt={product.title} width={200} />

      <h2>Price: ${product.price}</h2>

      <p>{product.description}</p>

      <p>
        <strong>Category:</strong> {product.category}
      </p>
    </div>
  );
}
