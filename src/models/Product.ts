import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  reviews: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: true,
  },
  discountedPrice: {
    type: Number,
    required: true,
  },
  imgs: {
    thumbnails: [String],
    previews: [String],
  },
  category: {
    type: String,
    default: "Uncategorized",
  },
  stock: {
    type: Number,
    default: 0,
  },
});

const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default Product;
