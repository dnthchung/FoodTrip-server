const bodyParser = require("body-parser");
const express = require("express");

// ========== / controller /==========
const db = require("../models");
const Shop = db.shop;

//get all shop
async function getAllShop(req, res, next) {
  try {
    const shop = await Shop.find();
    res.status(200).json(shop);
  } catch (err) {
    next(err);
  }
}

//get shop by id
async function getShopById(req, res, next) {
  try {
    const shop = await Shop.findById(req.params.id);
    res.status(200).json(shop);
  } catch (err) {
    next(err);
  }
}

//create 1 shop
async function createShop(req, res, next) {
  try {
    const newShop = new Shop(req.body);
    const saveShop = await newShop.save();
    res.status(201).json(saveShop);
  } catch (err) {
    next(err);
  }
}

//review a shop
async function reviewShop(req, res, next) {
  const { shopId } = req.params;
  const { name, email, rating, comment } = req.body;

  // Kiểm tra dữ liệu đầu vào
  if (!name || !email || !rating || !comment) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Tìm shop theo shopId
    const shop = await Shop.findById(shopId);
    if (!shop) {
      return res.status(404).json({ message: "Shop not found" });
    }

    // Tạo review mới
    const newReview = {
      name,
      email,
      rating,
      comment,
    };

    // Thêm review vào shop
    shop.reviews.reviewDetail.push(newReview);
    shop.reviews.reviewCount += 1; // Tăng số lượng review

    // Lưu shop
    await shop.save();

    return res.status(201).json({ message: "Review added successfully", shop });
  } catch (error) {
    console.error(error);
    next(error);
    return res.status(500).json({ message: "Server error" });
  }
}

// ========== / routes /==========
const shopRouter = express.Router();
shopRouter.use(bodyParser.json());

shopRouter.post("/:shopId/review", reviewShop);
shopRouter.get("/", getAllShop);
shopRouter.get("/:id", getShopById);
shopRouter.post("/", createShop);

module.exports = shopRouter;
