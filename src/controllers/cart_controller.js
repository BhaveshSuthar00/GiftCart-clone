const express = require('express');

const router = express.Router();

const Cart = require("../models/cart.model");

let user_id = "621741278586c460df80110e";
router.get('/remove/:id', async (req,res)=> {
    try {
        const items = await Cart.updateOne({user_id : user_id}, {$pull : {product_ids : req.params.id}}).lean().exec();
        res.redirect(`/cart/currentuser/${user_id}`);
    }
    catch (err) {
        res.send(err.message);
    }
})

router.get('/:id', async (req, res) =>{
    try {
        let item_push = req.params.id;
        let items = await Cart.find({user_id : user_id}).lean().exec();
        if(!items){
            let cart_create = await Cart.create({
                user_id : user_id,
                product_ids : [req.params.id,],
            });
        // res.redirect(`/shopitem/:${req.params.id}`);
        res.redirect(`/cart/currentuser/${user_id}`);

        } else {
            let pushitout;
            let ans = async()=>{
                return pushitout =  await Cart.findOneAndUpdate(
                    { user_id: user_id }, 
                    { $push : { product_ids: item_push } }, 
                    {new : true}    
                ).lean().exec();
            }
            await ans();
            res.redirect(`/cart/currentuser/${user_id}`);
        
        }
    }
    catch (err) {
        res.send(err.message);
    }
})

module.exports = router;
