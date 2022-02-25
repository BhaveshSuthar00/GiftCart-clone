

const express = require("express");

const router = express.Router();



const User = require("../models/user.model");

router.get("/create", async (req, res) => {
  try {
    //   await User.create(req.body)
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
        confirm_password: req.body.confirm_password,
      });
      res.redirect("/index");
    }

    // document.location.href = "/index"
  } catch (err) {
    res.send(err.message);
  }
});

router.get("/login", async (req, res) => {
  try {
    //   await User.create(req.body)
    const user = await User.find().lean().exec();
    res.render("login", {success: true});
  } catch (err) {
    res.send(err.message);
  }
});


router.get("/login/account", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.render("login", {success: false, message: "Incorrect Email or Password"});
    }

    const match = user.checkPassword(req.body.password);
    if (!match) {
      // return res.status(404).send({ message: "Incorrect Email or Password" });
      return res.render("login", {success: false, message: "Incorrect Email or Password"});
    }
    console.log(req.user);
    // req.user = user;
    // console.log(req.user)
    res.redirect("/index"); 
  } catch (error) {
    res.send(error.message);
  }
});


module.exports = {router};

// module.exports = router;
