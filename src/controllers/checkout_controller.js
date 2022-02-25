const express = require("express");
const router = express.Router();


const user_id = "6217a63b90c3cf0eea423c81"

const Address = require('../models/address.model');

router.get('/address', async (req,res) => {
    try {
        const address = await Address.find({user_id : user_id}).lean().exec();
        if(!address){

            res.render("checkout", {address : null});
        }
        res.render("checkout", {address : address});
    }
    catch (err) {
        res.render('error')
        console.log(err);
    }
})
router.post('/address/register', async (req, res) => {
    try {
        const address = await Address.findOne({user_id : user_id}).lean().exec();
        if(!address){
            const items = await Address.create({
                first_name : req.body.first_name,
                last_name : req.body.last_name,
                street_address : req.body.address,
                city : req.body.city,
                state : req.body.state,
                pincode : req.body.pincode,
                country : req.body.country,
                phone_number : req.body.number,
                user_id : user_id,
            })
            res.redirect('/product/payment');
        }
        res.redirect('/product/payment');
    }
    catch (err) {
        console.log(err)
        res.render("error");
    }
})
module.exports = router;