import React from "react";
import ShopWithSidebar from "@/components/ShopWithSidebar";
import connectToDatabase from "@/lib/db";
import Product from "@/models/Product";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Shop Page | NextCommerce Nextjs E-commerce template",
  description: "This is Shop Page for NextCommerce Template",
  // other metadata
};

const ShopWithSidebarPage = async () => {
  await connectToDatabase();
  const products = await Product.find().lean();
  const shopData = JSON.parse(JSON.stringify(products));

  return (
    <main>
      <ShopWithSidebar initialProducts={shopData} />
    </main>
  );
};

export default ShopWithSidebarPage;
