import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Product from "@/models/Product";
import shopData from "@/components/Shop/shopData";

export async function GET() {
  try {
    await connectToDatabase();

    // Check if products already exist to avoid duplicates
    const count = await Product.countDocuments();
    if (count > 0) {
      return NextResponse.json(
        { message: "Database already seeded!" },
        { status: 200 }
      );
    }

    // Insert all dummy data
    await Product.insertMany(shopData);

    return NextResponse.json(
      { message: "Successfully seeded database!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Seeding error:", error);
    return NextResponse.json(
      { message: "Failed to seed database" },
      { status: 500 }
    );
  }
}
