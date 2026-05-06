import { products } from "@/lib/db";

// GET → single product
export async function GET(req, { params }) {
  const { id } = await params;

  const product = products.find((p) => p.id === id);

  if (!product) {
    return Response.json({ message: "Not found" }, { status: 404 });
  }

  return Response.json(product);
}

// PUT → update
export async function PUT(req, { params }) {
  const { id } = await params;

  const body = await req.json();

  const index = products.findIndex((p) => p.id === id);

  if (index === -1) {
    return Response.json({ message: "Not found" }, { status: 404 });
  }

  products[index] = { ...products[index], ...body };

  return Response.json(products[index]);
}

// DELETE → remove
export async function DELETE(req, { params }) {
  const { id } = await params;

  const index = products.findIndex((p) => p.id === id);

  if (index === -1) {
    return Response.json({ message: "Not found" }, { status: 404 });
  }

  const deleted = products.splice(index, 1);

  return Response.json(deleted[0]);
}
