// require("dotenv").config();
// const userSchema = require("../models/user.model");
// const productSchema = require("../models/product.model");
// const jwt = require("jsonwebtoken");
const express = require("express");

const router = express.Router();

const User = require("../models/user.model");

router.get("", async (req, res) => {
  try {
    //   await User.create(req.body)
    const user = await User.find().lean().exec();
    res.render("register.ejs");
  } catch (err) {
    res.send(err.message);
  }
});
let user_id;
router.post("/users", async (req, res) => {
  try {
    if (req.body.password === req.body.confirm_password) {
      const new_user = await User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        confirm_password: req.body.confirm_password,
      });
      // console.log(new_user);
      user_id = new_user;
      // module.exports = user_id;
      // const users = await User.find().lean().exec();
      res.redirect("/index");
    }

    // document.location.href = "/index"
  } catch (err) {
    res.send(err.message);
  }
});

router.get("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      email: { $eq: req.body.email },
      password: { $eq: req.body.password },
    })
      .lean()
      .exec();
    if (!user) return res.send("Wrong Email or Password");
    res.redirect("/index");
  } catch (error) {
    res.send(error.message);
  }
});

const newToken = (user) => {
  return jwt.sign({ user }, process.env.JWT_SECRET_KEY);
};

const register = async (req, res) => {
  try {
    let user = await userSchema
      .findOne({ email: req.body.email })
      .lean()
      .exec();

    if (user) return res.status(400).send({ message: "Existing User" });

    user = await userSchema.create(req.body);

    const token = newToken(user);

    res.send({ user, token });
  } catch (error) {
    res.send(error.message);
  }
};

const login = async (req, res) => {
  try {
    const user = await userSchema.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).send({ message: "Incorrect Email or Password" });
    }

    const match = user.checkPassword(req.body.password);
    if (!match) {
      return res.status(404).send({ message: "Incorrect Email or Password" });
    }
    const token = newToken(user);

    res.send({ user, token });
  } catch (error) {
    res.send(error.message);
  }
};

// Try `npm i --save-dev @types/jsonwebtoken` if it exists or add a new declaration
// (.d.ts) file containing `declare module 'jsonwebtoken';`
module.exports = { user_id };

module.exports = router;

// module.exports = { register, login, newToken};
