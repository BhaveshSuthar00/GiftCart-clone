const express = require('express');

const router = express.Router();

const Cart = require("../models/cart.model");


router.get('/', async (req, res) =>{
    try {
        // const items = await Cart.find().lean().exec();
        res.render('cart');
    }
    catch (err) {
        res.send(err.message);
    }
})

module.exports = router;
