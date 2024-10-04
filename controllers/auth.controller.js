const db = require("../models");
const bcrypt = require("bcrypt");

const User = db.user;

//sign up
async function signUp(req, res, next) {
  try {
    if (req.body) {
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(req.body.password, salt);

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
      return res.status(404).json({
        message: "User not found",
      });
    }

    //compare password
    const validPassword = await bcrypt.compare(password, userFound.password);
    if (!validPassword) {
      return res.status(400).json({
        message: "Wrong password!!",
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

module.exports = {
  signUp,
  login,
};
