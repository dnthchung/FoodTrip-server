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

// ========== / routes /==========
const shopRouter = express.Router();
shopRouter.use(bodyParser.json());

shopRouter.get("/", getAllShop);
shopRouter.get("/:id", getShopById);
shopRouter.post("/", createShop);

module.exports = shopRouter;
