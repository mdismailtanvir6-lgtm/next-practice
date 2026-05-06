/// lib/api.js
export async function getProducts() {
  const res = await fetch("https://api.com/products", {
    // next: { revalidate: 60 },
    // cache: "force-cache", // or "no-store" for always fresh data
  });

  return res.json();
}
