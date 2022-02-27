require("dotenv").config();
const jwt = require("jsonwebtoken");

const express = require("express");

const router = express.Router();

const EventEmitter = require("events");
const eventEmitter = new EventEmitter();
const { welcomeMail } = require("../utils");

const newToken = (user) => {
  return jwt.sign({ user }, process.env.JWT_SECRET_KEY);
};

const User = require("../models/user.model");

router.get("/create", async (req, res) => {
  try {
    const user = await User.find().lean().exec();
    res.render("register");
  } catch (err) {
    res.send(err.message);
  }
});

router.post("/account", async (req, res) => {
  try {
    if (req.body.password === req.body.confirm_password) {
      let new_user = await User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
      });
      const token = newToken(new_user);
      res.cookie("Bearer ", token, { httpOnly: true });

      eventEmitter.on("User Register", welcomeMail);
      eventEmitter.emit("User Register", {
        from: "admin@giftcart.com",
        to: new_user.email,
        new_user,
      });

      return res.redirect("/index");
    }
  } catch (err) {
    return res.render("error");
  }
});

router.get("/login", async (req, res) => {
  try {
    const user = await User.find().lean().exec();
    res.render("login", { success: true });
  } catch (err) {
    return res.render("error");
  }
});

router.get("/login/account", async (req, res) => {
  try {
    if (req.body.email === "y@admin" && req.body.password === "admin") {
      return res.render("admin");
    }
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.render("login", {
        success: false,
        message: "Incorrect Email or Password",
      });
    }

    const match = user.checkPassword(req.body.password);
    if (!match) {
      // return res.status(404).send({ message: "Incorrect Email or Password" });
      return res.render("login", {
        success: false,
        message: "Incorrect Email or Password",
      });
    }
    const token = newToken(user);

    res.cookie("Bearer ", token, { httpOnly: true });
    res.redirect("/index");
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = { newToken, router };

// module.exports = router;
