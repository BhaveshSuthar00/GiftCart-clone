const express = require("express");
const router = express.Router();

const Product = require("../models/product.model");

router.get("/checkout", (req, res) => {
  try {
    res.render("checkout");
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/jewellery", async (req, res) => {
  try {
    const items = await Product.find({category : "jewellery"}).lean().exec();
    res.render("jewellery", { products: items });
  } catch (err) {
    res.send(err.message);
  }
});

router.get("/perfume", async (req, res) => {
  try {
    const items = await Product.find({ sub_category: "perfumes" })
      .lean()
      .exec();
    res.render("perfume", { products: items });
  } catch (err) {
    res.send(err.message);
  }
});
router.get("/random", async (req, res) => {
  try {
    // const items = await Product.find().lean().exec();
    res.render("random");
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;