const express = require("express");
const router = express.Router();

const Product = require("../models/product.model");

router.get("/jewellery", async (req, res) => {
  try {
    const items = await Product.find({ category: "jewellery" }).lean().exec();
    res.render("jewellery", { products: items });
  } catch (err) {
    res.render("error");
  }
});

router.get("/perfume", async (req, res) => {
  try {
    const items = await Product.find({ sub_category: "perfumes" })
      .lean()
      .exec();
      return res.render("perfume", { products: items });
  } catch (err) {
    return res.render("error");
  }
});

router.get("/random", async (req, res) => {
  try {
    let products = await Product.find({
      $or: [{ category: req.query.item }, { sub_category: req.query.sub }],
    })
      .lean()
      .exec();
      // console.log(req.query.item, req.query.sub);
    return res.render("random", { products });
  } catch (err) {
    return res.render("error");
  }
});
module.exports = router;
