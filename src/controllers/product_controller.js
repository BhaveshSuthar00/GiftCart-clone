const express = require("express");
const router = express.Router();

const Product = require("../models/product.model");

router.get("/jewellery", async (req, res) => {
  try {
    // const items = await Product.find().lean().exec();
    res.render("jewellery");
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
    let products = await Product.find({
      $or: [{ category: req.query.item }, { sub_category: req.query.sub }],
    })
      .lean()
      .exec();
    return res.render("random", { products });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});
module.exports = router;
