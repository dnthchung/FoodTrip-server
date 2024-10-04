// const mongoose = require("mongoose");

// const addressSchema = new mongoose.Schema({
//   // nếu có nhiều địa chỉ - thì show dạng : địa chỉ 1 : .... / địa chỉ 2 : ....
//   district: {
//     type: String,
//     required: false,
//   },
//   province: {
//     type: String,
//     required: false,
//   },
//   city: {
//     type: String,
//     required: true,
//   },
//   specificAddress: {
//     type: String,
//     required: true,
//   },
// });

// const socialSchema = new mongoose.Schema({
//   name: {
//     type: String,
//   },
//   link: {
//     type: String,
//   },
// });

// const reviewSchema = new mongoose.Schema({
//   reviewCount: {
//     type: Number,
//   },
//   reviewDetail: {
//     type: [reviewDetailSchema],
//     default: [],
//   },
// });

// const reviewDetailSchema = new mongoose.Schema({
//   name: {
//     type: String,
//   },
//   email: {
//     type: String,
//   },
//   rating: {
//     type: Number,
//   },
//   comment: {
//     type: String,
//   },
// });

// const menuSchema = new mongoose.Schema({
//   //name refer to food name, type : enum [cái, bát, đĩa, suất, phần] - currency : vnd,$ - rating : 1-5 - reviews : number of reviews
//   id: {
//     type: Number,
//     required: true,
//   },
//   name: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Food",
//   },
//   type: {
//     type: String,
//     enum: ["cái", "bát", "đĩa", "suất", "phần"],
//   },
//   price: {
//     type: String,
//     required: true,
//   },
//   currency: {
//     type: String,
//     enum: ["vnd", "$"],
//   },
//   rating: {
//     type: Number,
//   },
//   reviews: {
//     type: [reviewSchema],
//     default: [],
//   },
// });

// const shopSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   imageUrl: [
//     {
//       type: String,
//       required: true,
//     },
//   ],
//   email: {
//     type: String,
//     required: true,
//   },
//   phone: {
//     type: String,
//     required: true,
//   },
//   address: {
//     type: [addressSchema],
//     default: [],
//   },
//   social: {
//     type: [socialSchema],
//     default: [],
//   },
//   menu: {
//     type: [menuSchema],
//     default: [],
//   },
// });

// const Shop = mongoose.model("Shop", shopSchema);
// module.exports = Shop;

const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  district: { type: String, required: false },
  province: { type: String, required: false },
  city: { type: String, required: true },
  specificAddress: { type: String, required: true },
});

const socialSchema = new mongoose.Schema({
  name: { type: String },
  link: { type: String },
});

const reviewDetailSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  rating: { type: Number },
  comment: { type: String },
});

const reviewSchema = new mongoose.Schema({
  reviewCount: { type: Number },
  reviewDetail: { type: [reviewDetailSchema], default: [] },
});

const menuSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: mongoose.Schema.Types.ObjectId, ref: "Food" },
  type: { type: String, enum: ["cái", "bát", "tô", "đĩa", "suất", "phần"] },
  price: { type: String, required: true },
  currency: { type: String, enum: ["đ", "$"], required: true },
  rating: { type: Number, min: 1, max: 5 },
  reviews: { type: [reviewSchema], default: [] },
});

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
    address: { type: [addressSchema], default: [] },
    social: { type: [socialSchema], default: [] },
    menu: { type: [menuSchema], default: [] },
  },
  { timestamps: true },
);

const Shop = mongoose.model("Shop", shopSchema);

module.exports = Shop;
