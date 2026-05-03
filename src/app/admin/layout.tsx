import React from "react";
import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-1">
      {/* Sidebar */}
      <aside className="w-64 bg-white text-dark p-6 border-r border-gray-3">
        <h2 className="text-2xl font-bold mb-8 tracking-widest uppercase text-dark">Admin</h2>
        <nav className="flex flex-col gap-4">
          <Link href="/admin/products" className="hover:text-blue transition-colors">
            Manage Products
          </Link>
          <Link href="/admin/products/new" className="hover:text-blue transition-colors">
            Add Product
          </Link>
          <hr className="border-gray-3 my-4" />
          <Link href="/" className="hover:text-blue transition-colors">
            &larr; Back to Store
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 bg-gray-1 text-dark overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
