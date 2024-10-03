const mongoose = require("mongoose");

const planSchema = new mongoose.Schema({
  planCode: {
    type: String,
    required: true,
    unique: true,
  },
  monthAvailable: {
    type: Number,
    required: true,
  },
  planName: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  pricePerMonth: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
});

const Plan = mongoose.model("Plan", planSchema);
module.exports = Plan;
