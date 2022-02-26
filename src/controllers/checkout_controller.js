const express = require("express");
const router = express.Router();


// const user_id = "6217a63b90c3cf0eea423c81"
const authenticate = require("../middlewares/authenticate")

const Address = require('../models/address.model');
const Cart = require('../models/cart.model')
router.get('/address', async (req,res) => {
    try {
        let user_id = req.user._id;
        const address = await Address.findOne({user_id : user_id}).lean().exec();
        const product = await Cart.findOne({user_id : user_id}).populate({path : "product_ids"}).lean().exec();
        if(address=== null && product.product_ids.length !== 0){
            console.log('hre')
            return res.render("checkout", {address : null , items : product.product_ids});
        }
        else if(!address){
            console.log('here')
            return res.render("checkout", {address : null , items : null});
            
        }
        console.log('here2')
        return res.render("checkout", {address : address, items : product.product_ids});
    }
    catch (err) {
        console.log(err);
        res.render('error')
    }
})
router.post('/address/register', async (req, res) => {
    try {
        let user_id = req.user._id;
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
        return res.redirect('/payment');
    }
    catch (err) {
        console.log(err)
        res.render("error");
    }
})
module.exports = router;