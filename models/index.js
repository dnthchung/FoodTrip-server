// const mongoose = require("mongoose");

// // ================ import all models here ================
// // const Cake = require("./cake.model");

// mongoose.Promise = global.Promise;
// const db = {};

// // ================ create schema here ================
// // db.cake = Cake;

// db.connectDB = async () => {
//   mongoose
//     .connect(process.env.MONGO_URI, {
//       dbName: process.env.DB_NAME,
//     })
//     .then(() => {
//       console.log("Successfully connect to MongoDB name " + process.env.DB_NAME);
//     })
//     .catch((err) => {
//       console.error(err.message);
//       process.exit();
//     });
// };
// module.exports = db;

const mongoose = require("mongoose");

// ================ import all models here ================
const User = require("./user.model");
const Shop = require("./shop.model");
const Plan = require("./plan.model");
const Bill = require("./bill.model");

mongoose.Promise = global.Promise;

const db = {};

db.connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: process.env.DB_NAME,
    });
    console.log("Successfully connected to MongoDB: " + process.env.DB_NAME);
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1); // Exit if unable to connect
  }
};

module.exports = db;
