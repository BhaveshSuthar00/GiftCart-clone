const express = require("express");

const router = express.Router();

const Cart = require("../models/cart.model");
const CartSingle = require('../models/userSingle_model')
router.get('/single/:id', async (req, res) =>{
    try {
        const user_id = req.user._id;
        let cart = await CartSingle.findOne({user_id : user_id}).lean().exec();
        if(cart){
            cart = await CartSingle.findOneAndReplace({user_id : user_id}, {user_id : user_id,product_id : [req.params.id]}).lean().exec();
        }
        if(!cart){
            cart = await CartSingle.create({
                user_id : user_id,
                product_id : [req.params.id]
            });
        }
        return res.redirect('/payment/single');
    }
    catch(err){
        res.render('error');
    }
})

router.get('/', async (req, res) => {
    try {
        let user_id = req.user._id;
        const user = await Cart.findOne({user_id: user_id}).lean().exec();
        if(!user){
            res.render('cart', {items : null});
        } else { 
            res.redirect(`/cart/currentuser`)
        }
    } catch (err) {
        res.render('cart', {items : null});
    }
})
router.get('/removeUser', async (req, res)=> {
    try {
        let user_id = req.user._id;
        const user = await Cart.findOne({user_id : user_id}).lean().exec();
        let removeUser = await Cart.findByIdAndDelete({_id : user._id}).lean().exec();
        return res.redirect('/index');
    } catch(err) {
        res.render('error');
    }
})
router.get('/remove/:id', async (req,res)=> {
    try {
        let user_id = req.user._id;
        const items = await Cart.updateOne({user_id : user_id}, {$pull : {product_id : req.params.id}}).lean().exec();
        return res.redirect(`/cart/currentuser`);
    }
    catch (err) {
        res.send(err.message);
        res.render('error')
    }
})
router.get('/Multiple/:id', async (req, res) =>{
    try {
        let user_id = req.user._id;
        let item_push = req.params.id;
        var items = await Cart.findOne({user_id : user_id}).lean().exec();
        if(!items){
            items = await Cart.create({
                user_id : user_id,
                product_id : [req.params.id,],
            });
            res.redirect("/cart/currentuser");
        } else {
            let ans = async()=>{
                return items =  await Cart.findOneAndUpdate(
                    { user_id: user_id }, 
                    { $push : { product_id: item_push } }, 
                    // {new : true}
                ).lean().exec();
            }
            await ans();
            res.redirect("/cart/currentuser");
        }
    }
    catch (err) {
        res.send(err.message);
        res.render('error')
    }
});

router.get("/currentuser", async (req, res) => {
    try {
        let user_id = req.user._id;
        const items = await Cart.findOne({ user_id: user_id })
        .populate({ path: "product_id"})
        .lean()
        .exec();
        return res.render("cart", { items: items.product_id });
    } catch (err) {
        res.send(err.message);
        res.render('error')
    }
});
module.exports = router;
