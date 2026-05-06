// app/products/page.js

import ProductCard from "../../components/product/ProductCard";
// const product_URL = "https://fakestoreapi.com/products";
const product_URL = "http://localhost:3000/api/products";

async function getProducts() {
  const res = await fetch(product_URL, {
    // cache: "force-cache",
    // cache: "no-cache",
    next: { revalidate: 10 }, // revalidate every 1 minute
  });

  return res.json();
}

// ========= main ui =========
export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="container mx-auto p-4">
      <h1>All Products</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products?.map((p) => (
          <div key={p.id} className="">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </div>
  );
}
