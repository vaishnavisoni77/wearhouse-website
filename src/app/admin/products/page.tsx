import React from "react";
import connectToDatabase from "@/lib/db";
import Product from "@/models/Product";
import Link from "next/link";
import Image from "next/image";

export default async function AdminProductsPage() {
  await connectToDatabase();
  const products = await Product.find({}).sort({ createdAt: -1 }).lean();
  const shopData = JSON.parse(JSON.stringify(products));

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-semibold">Products Inventory</h1>
        <Link
          href="/admin/products/new"
          className="bg-blue hover:bg-white hover:text-black transition-colors text-white px-6 py-2 rounded-md font-medium"
        >
          + Add New Product
        </Link>
      </div>

      <div className="bg-black border border-gray-3 rounded-lg overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-3 bg-[#111]">
              <th className="p-4 font-medium text-gray-500">Product</th>
              <th className="p-4 font-medium text-gray-500">Price</th>
              <th className="p-4 font-medium text-gray-500">Discounted</th>
              <th className="p-4 font-medium text-gray-500">Reviews</th>
              <th className="p-4 font-medium text-gray-500 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {shopData.map((item: any) => (
              <tr key={item._id} className="border-b border-gray-3 hover:bg-[#111]">
                <td className="p-4 flex items-center gap-4">
                  <div className="w-12 h-12 relative rounded overflow-hidden bg-gray-2">
                    <Image
                      src={item.imgs?.thumbnails[0] || "/images/product/product-01.png"}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="font-medium">{item.title}</span>
                </td>
                <td className="p-4 text-gray-400">₹{item.price}</td>
                <td className="p-4 text-blue">₹{item.discountedPrice}</td>
                <td className="p-4">{item.reviews}</td>
                <td className="p-4 text-right">
                  <button className="text-gray-400 hover:text-red transition-colors text-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {shopData.length === 0 && (
          <div className="p-8 text-center text-gray-400">
            No products found. Start by adding one!
          </div>
        )}
      </div>
    </div>
  );
}
