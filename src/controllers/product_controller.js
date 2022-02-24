const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const Product = require("../models/product.model");

// router.get('/single/:id', async (req, res) => {
//     try {
//         const item = await Product.findOne({ _id: req.params.id}).lean().exec();
//         res.render('shopitem', { item })
//     } catch (err) {
//         res.send(err.message)
//     }
// })

router.get('/jewellery', async (req, res) =>{
    try {
        // const items = await Product.find().lean().exec();
        res.render('jewellery');
    }
    catch (err) {
        res.send(err.message);
    }
})

router.get("", async (req, res) => {
  try {
    let products = await Product.find().lean().exec();
    return res.status(200).send(products);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/single/:id", async (req, res) => {
  try {
    let product;
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      product = await Product.find({ id: req.params.id }).lean().exec();
      return res.status(200).send(product);
    }
    product = await Product.findById(req.params.id).lean().exec();
    return res.status(200).send(product);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.delete("/single/:id", async (req, res) => {
  try {
    let product;
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      product = await Product.findOneAndDelete({ id: req.params.id })
        .lean()
        .exec();
      return res.status(200).send(product);
    }
    product = await Product.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send(product);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.patch("/single/:id", async (req, res) => {
  try {
    let product;
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      product = await Product.findOneAndUpdate(
        { id: req.params.id },
        req.body,
        { new: true }
      );
      return res.status(200).send(product);
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).send(product);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.put("/single/:id", async (req, res) => {
  try {
    let product;
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      product = await Product.findOneAndUpdate(
        { id: req.params.id },
        req.body,
        { new: true }
      );
      return res.status(200).send(product);
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).send(product);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("", async (req, res) => {
  try {
    let product = await Product.create(req.body);
    return res.status(200).send(product);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

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

    const items = await Product.find({sub_category : "perfumes"}).lean().exec();
    res.render("perfume", {items});
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