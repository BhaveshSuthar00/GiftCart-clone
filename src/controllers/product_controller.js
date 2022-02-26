const express = require("express");
const router = express.Router();

const Product = require("../models/product.model");
const authenticate = require("../middlewares/authenticate")
const Address = require('../models/address.model')
const Cart = require('../models/cart.model')
const user_id = "6217a63b90c3cf0eea423c81"

router.get("/payment",async (req, res) => {
  try {
    res.redirect("/payment");
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/jewellery", async (req, res) => {
  try {
    const items = await Product.find({ category: "jewellery" }).lean().exec();
    res.render("jewellery", { products: items });
  } catch (err) {
    console.log(err);

    res.render('error');
  }
});

router.get("/perfume", async (req, res) => {
  try {
    const items = await Product.find({ sub_category: "perfumes" })
      .lean()
      .exec();
    res.render("perfume", { products: items });
  } catch (err) {
    res.render('error');
  }
});
router.get("/random", async (req, res) => {
  try {
    // const items = await Product.find().lean().exec();
    res.render("random");
  } catch (err) {
    res.send(err.message);
    res.render("error");
  }
});

module.exports = router;
