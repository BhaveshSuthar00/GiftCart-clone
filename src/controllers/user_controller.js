const express = require('express');

const router = express.Router();

const User = require("../models/user.model");


router.get('/', async (req, res) =>{
    try {
        // const items = await User.find().lean().exec();
        res.render('login');
    }
    catch (err) {
        res.send(err.message);
    }
})

module.exports = router;
