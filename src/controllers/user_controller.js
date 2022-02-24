const express = require("express");

const router = express.Router();

const User = require("../models/user.model");

router.get("", async (req, res) => {
  try {
    //   await User.create(req.body)
    const user = await User.find().lean().exec();
    res.render("users/register.ejs");
  } catch (err) {
    res.send(err.message);
  }
});

router.post("", async (req, res) => {
    try {
    await User.create(req.body)
    const users = await User.find().lean().exec();
      res.render("users/register.ejs", { users });
    } catch (err) {
      res.send(err.message);
    }
  });

module.exports = router;
