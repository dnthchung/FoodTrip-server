const mongoose = require("mongoose");

const billSchema = new mongoose.Schema(
  {
    billCode: { type: String, required: true, unique: true },
    bankName: { type: String, required: true },
    plan: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Plan",
    },
    account: { type: String, required: true },
    title: { type: String, required: true },
    totalPrice: { type: String, required: true },
    date: { type: Date, required: true },
    status: { type: String, required: true, enum: ["success", "pending", "failed"] }, // Enum for status values
  },
  { timestamps: true },
);

const Bill = mongoose.model("Bill", billSchema);

module.exports = Bill;
