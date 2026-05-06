import { products } from "@/lib/db";

// GET all products
export async function GET() {
  return Response.json(products );
}

// POST new product add
export async function POST(req) {
  const body = await req.json();

  const newProduct = {
    // id: Date.now().toString(),
    id :11,
    name: body.name,
    price: body.price,
    category: body.category || "uncategorized",
    image: body.image || "",
    stock: body.stock || 0,
    rating: body.rating || 0,
    description: body.description || "",
  };

  products.push(newProduct);

  return Response.json({
    message: "Product added successfully",
    data: newProduct,
    status: 201 , 
  });
}