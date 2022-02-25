require("dotenv").config();
const jwt = require("jsonwebtoken");

const express = require("express");

const router = express.Router();

const newToken = (user) => {
  return jwt.sign({ user }, process.env.JWT_SECRET_KEY);
};

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
let user_id;
router.post("/account", async (req, res) => {
  try {
    
    if (req.body.password === req.body.confirm_password) {
      const new_user = await User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        confirm_password: req.body.confirm_password,
      });
      const token = newToken(user);
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

let user;

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
    const token = newToken(user);
    req.user = user;
    // console.log(req.user)
    res.redirect("/index");
  } catch (error) {
    res.send(error.message);
  }
});

// localStorage.setItem()
// const newToken = (user) => {
//   return jwt.sign({ user }, process.env.JWT_SECRET_KEY);
// };

// const register = async (req, res) => {
//   try {
//     let user = await userSchema
//       .findOne({ email: req.body.email })
//       .lean()
//       .exec();

//     if (user) return res.status(400).send({ message: "Existing User" });

//     user = await userSchema.create(req.body);

//     const token = newToken(user);

//     res.send({ user, token });
//   } catch (error) {
//     res.send(error.message);
//   }
// };

// const login = async (req, res) => {
//   try {
//     const user = await userSchema.findOne({ email: req.body.email });
//     if (!user) {
//       return res.status(404).send({ message: "Incorrect Email or Password" });
//     }

//     const match = user.checkPassword(req.body.password);
//     if (!match) {
//       return res.status(404).send({ message: "Incorrect Email or Password" });
//     }
//     const token = newToken(user);

//     res.send({ user, token });
//   } catch (error) {
//     res.send(error.message);
//   }
// };

// Try `npm i --save-dev @types/jsonwebtoken` if it exists or add a new declaration
// (.d.ts) file containing `declare module 'jsonwebtoken';`
// module.exports = { user_id };
module.exports = {newToken, router};

// module.exports = router;
