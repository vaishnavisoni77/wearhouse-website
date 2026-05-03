import mongoose from "mongoose";
import shopData from "../src/components/Shop/shopData";

const MONGODB_URI = "mongodb+srv://vaishnavisoni77_db_user:nJzJk9KF4wg7t1B0@cluster0.80atbnu.mongodb.net/wearhouse?retryWrites=true&w=majority&appName=Cluster0";

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

async function seed() {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB.");

    console.log("Clearing existing products...");
    await Product.deleteMany({});

    console.log(`Inserting ${shopData.length} products...`);
    await Product.insertMany(shopData);
    console.log("Successfully seeded database!");
    
    process.exit(0);
  } catch (error) {
    console.error("Failed to seed database:", error);
    process.exit(1);
  }
}

seed();
