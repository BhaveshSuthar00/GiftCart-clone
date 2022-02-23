const express = require('express');

const router = express.Router();

const Product = require("../models/product.model");



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
        // const items = await Product.find().lean().exec();
        res.render('perfume');
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
