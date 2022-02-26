const express = require("express");
const router = express.Router();

const Product = require("../models/product.model");

router.get("/:id",async (req, res) => {
  try {
    const item = await Product.findOne({_id : req.params.id}).lean().exec();

    res.render("shopitem", {item : item});
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});


module.exports = router;
