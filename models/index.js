const mongoose = require("mongoose");

// ================ import all models here ================
const User = require("./user.model");
const Shop = require("./shop.model");
const Plan = require("./plan.model");
const Bill = require("./bill.model");
const Food = require("./food.model");

mongoose.Promise = global.Promise;
const db = {};

// ================ create schema here ================
db.user = User;
db.shop = Shop;
db.plan = Plan;
db.bill = Bill;
db.food = Food;

const MONGO_LINK = process.env.MONGO_URI;
// const MONGO_LINK = process.env.MONGO_LOCAL_URL;  => use this for không có mạng

db.connectDB = async () => {
  try {
    await mongoose.connect(MONGO_LINK, {
      dbName: process.env.DB_NAME,
    });
    console.log("Successfully connected to MongoDB: " + process.env.DB_NAME);
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1);
  }
};

module.exports = db;
