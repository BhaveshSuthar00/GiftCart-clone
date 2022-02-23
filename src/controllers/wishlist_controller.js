const express = require('express');

const router = express.Router();

const Wishlist = require("../models/wishlist.model");


router.get('/', async (req, res) =>{
    try {
        // const items = await Wishlist.find().lean().exec();
        res.render('wishlist');
    }
    catch (err) {
        res.send(err.message);
    }
})

module.exports = router;
