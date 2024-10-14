const mongoose = require("mongoose");

// Address Schema
const addressSchema = new mongoose.Schema({
  district: { type: String },
  province: { type: String },
  city: { type: String, required: true },
  specificAddress: { type: String, required: true },
});

// Social Links Schema
const socialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  link: { type: String, required: true },
});

// Review Detail Schema
const reviewDetailSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
  },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String, required: true },
});

// Review Schema
const reviewSchema = new mongoose.Schema({
  reviewCount: { type: Number, default: 0 },
  reviewDetail: { type: [reviewDetailSchema], default: [] },
});

// Menu Schema
const menuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: {
    type: String,
    enum: ["cái", "bát", "tô", "đĩa", "suất", "phần"],
    required: true,
  },
  price: { type: String, required: true },
  currency: {
    type: String,
    enum: ["đ", "$"],
    required: true,
  },
});

// Shop Schema
const shopSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    imageUrl: [{ type: String, required: true }],
    email: {
      type: String,
      required: true,
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
    },
    phone: {
      type: String,
      required: true,
      match: [/^\d{10,15}$/, "Please provide a valid phone number"],
    },
    minPrice: { type: Number, required: true },
    maxPrice: { type: Number, required: true },
    social: { type: [socialSchema], default: [] },
    address: { type: [addressSchema], default: [] },
    menu: { type: [menuSchema], default: [] },
    reviews: reviewSchema,
    rating: { type: Number, min: 1, max: 5 },
  },
  { timestamps: true },
);

// Create and export the Shop model
const Shop = mongoose.model("Shop", shopSchema);
module.exports = Shop;
