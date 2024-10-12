const bodyParser = require("body-parser");
const express = require("express");

// ========== / controller /==========
const db = require("../models");
const User = db.user;
const bcrypt = require("bcrypt");

//sign up
async function register(req, res, next) {
  try {
    if (req.body) {
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(req.body.password, salt);

      const emailInput = req.body.email;
      //check email exist
      const userExist = await User.findOne({
        email: emailInput,
      });
      if (userExist) {
        return res.status(400).json({
          status: 400,
          message: "Email đã được đăng ký !!",
        });
      }

      const newUser = new User({
        fullName: req.body.fullName,
        role: "user",
        email: req.body.email,
        password: hashPassword,
      });

      const saveUser = await newUser.save();

      res.status(201).json({
        message: "User created successfully",
        data: saveUser,
      });
    }
  } catch (err) {
    next(err);
  }
}

//login
async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    const userFound = await User.findOne({
      email,
    });

    if (!userFound) {
      return res.status(400).json({
        status: 400,
        message: "Tài khoản chưa đăng ký !!",
      });
    }

    //compare password
    const validPassword = await bcrypt.compare(password, userFound.password);
    if (!validPassword) {
      return res.status(400).json({
        message: "Mật khẩu không chính xác!!",
      });
    }

    const dataBack = {
      _id: userFound._id,
      fullName: userFound.fullName,
      email: userFound.email,
      role: userFound.role,
      phone: userFound.phone,
      address: userFound.address,
      plan: userFound.plan,
      favoriteShop: userFound.favoriteShop,
      bill: userFound.bill,
    };

    res.status(200).json({
      message: "Login successfully",
      data: dataBack,
    });
  } catch (err) {
    next(err);
  }
}

//logout
async function logout(req, res, next) {
  try {
    req.session.destroy();
    res.status(200).json({
      message: "Logout successfully",
    });
  } catch (err) {
    next(err);
  }
}

//create admin
async function createAdmin(req, res, next) {
  try {
    if (req.body) {
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(req.body.password, salt);

      const newUser = new User({
        fullName: req.body.fullName,
        role: "admin",
        email: req.body.email,
        password: hashPassword,
      });

      const saveUser = await newUser.save();

      res.status(201).json({
        message: "Admin created successfully",
        data: saveUser,
      });
    }
  } catch (err) {
    next(err);
  }
}

// ========== / routes /==========
const authRouter = express.Router();
authRouter.use(bodyParser.json());

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.post("/createAdmin", createAdmin);

module.exports = authRouter;
