const express = require('express');

const router = express.Router();

const Address = require("../models/address.model");


router.get('', async (req, res) =>{
    try {
        const items = await Address.find().lean().exec();
        res.render('checkout');
    }
    catch (err) {
        res.send(err.message);
    }
})

module.exports = router;
