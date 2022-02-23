const express = require('express');

const router = express.Router();

const Admin = require("../models/admin.model");


router.get('/', async (req, res) =>{
    try {
        const items = await Admin.find().lean().exec();
        res.render('admin');
    }
    catch (err) {
        res.send(err.message);
    }
})

module.exports = router;
