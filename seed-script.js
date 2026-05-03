const mongoose = require("mongoose");
const MONGODB_URI = "mongodb+srv://vaishnavisoni77_db_user:nJzJk9KF4wg7t1B0@cluster0.80atbnu.mongodb.net/wearhouse?retryWrites=true&w=majority&appName=Cluster0";

// Define Schema
const ProductSchema = new mongoose.Schema({
  title: String,
  reviews: Number,
  price: Number,
  discountedPrice: Number,
  id: Number,
  imgs: {
    thumbnails: [String],
    previews: [String],
  },
});

const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema);

// We need to read shopData.ts, but since it's TS, we'll parse it or use ts-node
// Alternatively, since I have the tools, I'll compile it or just require the JS version.
