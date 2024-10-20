const express = require("express");
const { saveOrder } = require("../controllers/order.controller"); // Corrected the function name

const router = express.Router();

// Route to save the order
router.post("/save-order", saveOrder);

module.exports = router;
