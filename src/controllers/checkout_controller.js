const express = require("express");
const router = express.Router();

const Address = require('../models/address.model');
const Cart = require('../models/cart.model')
router.get('/address', async (req,res) => {
    try {
        let user_id = req.user._id;
        const address = await Address.findOne({user_id : user_id}).lean().exec();
        const product = await Cart.findOne({user_id : user_id}).populate({path : "product_id"}).lean().exec();
        if(address=== null && product.product_id.length !== 0){
            return res.render("checkout", {address : null , items : product.product_id});
        }
        else if(!address){
            return res.render("checkout", {address : null , items : null});
        }
        return res.render("checkout", {address : address, items : product.product_id});
    }
    catch (err) {
        return res.render('error')
    }
})
router.post('/address/register', async (req, res) => {
    try {
        let user_id = req.user._id;
        await Address.create({
                first_name : req.body.first_name,
                last_name : req.body.last_name,
                street_address : req.body.address,
                city : req.body.city,
                state : req.body.state,
                pincode : req.body.pincode,
                country : req.body.country,
                phone_number : req.body.number,
                user_id : user_id,
            });
        return res.redirect('/payment');
    }
    catch (err) {
        return res.render("error");
    }
})
module.exports = router;