const mongoose = require("mongoose");

// Import all models here
const User = require("./user.model");
const Shop = require("./shop.model");
const Plan = require("./plan.model");
const Bill = require("./bill.model");
const Food = require("./food.model");

mongoose.Promise = global.Promise;

const db = {
  user: User,
  shop: Shop,
  plan: Plan,
  bill: Bill,
  food: Food,
};

// Function to connect to MongoDB
db.connectDB = async () => {
  try {
    // Determine whether to use Atlas or Local MongoDB
    const mongoURI = process.env.USE_ATLAS === "true" ? process.env.MONGO_URI : process.env.MONGO_LOCAL_URL;

    await mongoose.connect(mongoURI, {
      dbName: process.env.DB_NAME,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`Successfully connected to MongoDB: ${process.env.DB_NAME}`);
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1); // Terminate the app on database connection error
  }
};

module.exports = db;
