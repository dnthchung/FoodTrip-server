// order.controller.js
const Order = require("../models/order.model");
const User = require("../models/user.model"); // Import User model
const moment = require('moment'); // Import moment.js for date manipulation

// Function to save an order
const saveOrder = async (req, res, next) => {
    try {
        const { userId, total, time, transactionNo } = req.body;

        if (!userId || !total || !time || !transactionNo) {
            return res.status(400).json({ message: "Invalid data provided" });
        }

        // Find the user to check their premium status and expiration date
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Create a new order object
        const newOrder = new Order({
            userId,
            total,
            time,
            transactionNo,
            status: "Success",
        });

        // Save the order to the database
        await newOrder.save();

        // Check the current date
        const currentDate = moment();

        // Determine the new expirationDate
        let newExpirationDate;
        if (!user.expirationDate) {
            // If no expirationDate, set it to current date + time (in months)
            newExpirationDate = currentDate.add(time, 'months').toDate();
        } else {
            // If expirationDate exists, compare it with the current date
            if (moment(user.expirationDate).isBefore(currentDate)) {
                // If expirationDate is in the past, set it to current date + time
                newExpirationDate = currentDate.add(time, 'months').toDate();
            } else {
                // If expirationDate is valid, update it by adding time
                newExpirationDate = moment(user.expirationDate).add(time, 'months').toDate();
            }
        }

        // Update the user's document to include the new order and the updated expirationDate
        await User.findByIdAndUpdate(
            userId,
            {
                $push: { order: newOrder._id },
                $set: { isPremium: true, expirationDate: newExpirationDate } // Update isPremium and expirationDate
            },
            { new: true, useFindAndModify: false }
        );

        res.status(200).json({ message: "Order saved successfully", data: newOrder });
    } catch (error) {
        console.error("Error saving order:", error);
        res.status(500).json({ message: "Internal server error:", error });
    }
};

module.exports = { saveOrder };
