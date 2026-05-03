const mongoose = require("mongoose");
const MONGODB_URI = "mongodb+srv://vaishnavisoni77_db_user:nJzJk9KF4wg7t1B0@cluster0.80atbnu.mongodb.net/wearhouse?retryWrites=true&w=majority&appName=Cluster0";

async function test() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("SUCCESS: Connected to MongoDB!");
    process.exit(0);
  } catch (err) {
    console.error("ERROR:", err.message);
    process.exit(1);
  }
}

test();
