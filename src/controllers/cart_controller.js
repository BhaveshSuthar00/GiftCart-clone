const express = require("express");

const router = express.Router();

const Cart = require("../models/userSingle_model");
router.get('/single/:id', async (req, res) =>{
    try {
        const user_id = req.user._id;
        let cart = await Cart.findOne({user_id : user_id}).lean().exec();
        if(cart){
            cart = await Cart.findOneAndReplace({user_id : user_id}, {user_id : user_id,product_id : [req.params.id]}).lean().exec();
        }
        if(!cart){
            cart = await Cart.create({
                user_id : user_id,
                product_id : [req.params.id]
            });
        }
        return res.redirect('/payment/single');
    }
    catch(err){
        console.log(err.message);
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
            res.redirect(`/cart/currentuser/${user_id}`)
        }
    } catch (err) {
        console.log(err);
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
        console.log(err)
        res.render('error');
    }
})
router.get('/remove/:id', async (req,res)=> {
    try {
        let user_id = req.user._id;
        const items = await Cart.updateOne({user_id : user_id}, {$pull : {product_ids : req.params.id}}).lean().exec();
        return res.redirect(`/cart/currentuser/${user_id}`);
    }
    catch (err) {
        res.send(err.message);
        res.render('error')
    }
})
router.get('/:id', async (req, res) =>{
    try {
        let user_id = req.user._id;
        let item_push = req.params.id;
        var items = await Cart.findOne({user_id : user_id}).lean().exec();
        if(!items){
            let items = await Cart.create({
                user_id : user_id,
                product_ids : [req.params.id,],
            });
            res.redirect(`/cart/currentuser/${user_id}`);
        } else {
            let ans = async()=>{
                return items =  await Cart.findOneAndUpdate(
                    { user_id: user_id }, 
                    { $push : { product_ids: item_push } }, 
                    {new : true}
                ).lean().exec();
            }
            await ans();
            items = await Cart.findOne({user_id : user_id}).populate({path : 'product_ids'}).lean().exec();
            res.redirect(`/cart/currentuser/${user_id}`);
        }
    }
    catch (err) {
        res.send(err.message);
        res.render('error')
    }
});

router.get("/currentuser/:id", async (req, res) => {
    try {
        let user_id = req.user._id;
        const items = await Cart.findOne({ user_id: user_id })
        .populate({ path: "product_ids" })
        .lean()
        .exec();
        return res.render("cart", { items: items.product_ids });
    } catch (err) {
        res.send(err.message);
        res.render('error')
    }
});
module.exports = router;
