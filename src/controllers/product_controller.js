const express = require('express');

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
router.get('/perfume', async (req, res) =>{
    try {
        const products = await Product.find({ sub_category :"perfumes"}).lean().exec();
        res.render('perfume', { products });
    }
    catch (err) {
        res.send(err.message);
    }
})
router.get('/random', async (req, res) =>{
    try {
        // const items = await Product.find().lean().exec();
        res.render('random');
    }
    catch (err) {
        res.send(err.message);
    }
})
module.exports = router;
