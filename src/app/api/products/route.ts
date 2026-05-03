import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Product from "@/models/Product";

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const body = await req.json();

    const { title, price, discountedPrice, imgs } = body;

    if (!title || !price || !discountedPrice) {
      return NextResponse.json(
        { message: "Title, Price, and Discounted Price are required." },
        { status: 400 }
      );
    }

    // Since our product model generates _id, we don't strictly need 'id' as a number,
    // but the old shopData had 'id'. Let's generate a random one if needed, or let Mongoose handle it.
    const newProduct = await Product.create({
      title,
      price,
      discountedPrice,
      imgs,
      id: Math.floor(Math.random() * 100000), // Fallback for components still using `id` instead of `_id`
      reviews: 0,
    });

    return NextResponse.json(
      { message: "Product created successfully", product: newProduct },
      { status: 201 }
    );
  } catch (error) {
    console.error("Product creation error:", error);
    return NextResponse.json(
      { message: "Failed to create product" },
      { status: 500 }
    );
  }
}
