import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Order from "@/models/Order";

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const body = await req.json();

    const { customerName, customerPhone, items, totalAmount, paymentMethod } = body;

    if (!items || items.length === 0) {
      return NextResponse.json(
        { message: "Order must contain items" },
        { status: 400 }
      );
    }

    const newOrder = await Order.create({
      customerName,
      customerPhone,
      items,
      totalAmount,
      paymentMethod,
      status: "pending",
    });

    return NextResponse.json(
      { message: "Order created successfully!", order: newOrder },
      { status: 201 }
    );
  } catch (error) {
    console.error("Order creation error:", error);
    return NextResponse.json(
      { message: "Failed to create order" },
      { status: 500 }
    );
  }
}
