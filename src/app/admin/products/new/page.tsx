"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddProductPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    discountedPrice: "",
    imageUrl: "",
    category: "T-Shirts",
    stock: "0",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        title: formData.title,
        price: Number(formData.price),
        discountedPrice: Number(formData.discountedPrice),
        category: formData.category,
        stock: Number(formData.stock),
        imgs: {
          thumbnails: [formData.imageUrl],
          previews: [formData.imageUrl],
        },
      };

      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        alert("Product added successfully!");
        router.push("/admin/products");
      } else {
        const errorData = await res.json();
        alert("Failed to add product: " + errorData.message);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-semibold mb-8">Add New Product</h1>

      <form onSubmit={handleSubmit} className="bg-white border border-gray-3 p-8 rounded-lg space-y-6">
        <div>
          <label className="block text-sm font-medium text-dark-4 mb-2">Product Title</label>
          <input
            required
            type="text"
            className="w-full bg-gray-1 border border-gray-3 rounded-md p-3 text-dark focus:outline-none focus:border-blue"
            placeholder="e.g. Premium Denim Jeans"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-dark-4 mb-2">Original Price (₹)</label>
            <input
              required
              type="number"
              className="w-full bg-gray-1 border border-gray-3 rounded-md p-3 text-dark focus:outline-none focus:border-blue"
              placeholder="e.g. 1500"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-dark-4 mb-2">Discounted Price (₹)</label>
            <input
              required
              type="number"
              className="w-full bg-gray-1 border border-gray-3 rounded-md p-3 text-dark focus:outline-none focus:border-blue"
              placeholder="e.g. 999"
              value={formData.discountedPrice}
              onChange={(e) => setFormData({ ...formData, discountedPrice: e.target.value })}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-dark-4 mb-2">Product Image URL</label>
          <input
            required
            type="url"
            className="w-full bg-gray-1 border border-gray-3 rounded-md p-3 text-dark focus:outline-none focus:border-blue"
            placeholder="https://example.com/image.jpg"
            value={formData.imageUrl}
            onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
          />
          <p className="text-xs text-dark-5 mt-2">Paste a direct link to an image (imgur, postimages, etc.)</p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-dark-4 mb-2">Category</label>
            <select
              required
              className="w-full bg-gray-1 border border-gray-3 rounded-md p-3 text-dark focus:outline-none focus:border-blue"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            >
              <option value="T-Shirts">T-Shirts</option>
              <option value="Shirts">Shirts</option>
              <option value="Jeans">Jeans</option>
              <option value="Trousers">Trousers</option>
              <option value="Jackets">Jackets</option>
              <option value="Dresses">Dresses</option>
              <option value="Accessories">Accessories</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-dark-4 mb-2">Stock Quantity</label>
            <input
              required
              type="number"
              className="w-full bg-gray-1 border border-gray-3 rounded-md p-3 text-dark focus:outline-none focus:border-blue"
              placeholder="e.g. 50"
              value={formData.stock}
              onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue text-white font-medium py-3 rounded-md hover:bg-opacity-90 transition-all disabled:opacity-50"
        >
          {loading ? "Saving..." : "Save Product"}
        </button>
      </form>
    </div>
  );
}
