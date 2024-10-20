// order.model.js
const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    total: {
        type: Number,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    transactionNo: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: "Pending",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Ensure you are exporting the model properly
const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
