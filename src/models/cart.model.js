const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    product_id : [{type : mongoose.Schema.Types.ObjectId, ref : "product", required : true},],
    user_id : {type : mongoose.Schema.Types.ObjectId, ref : 'user', required : true},
},{
    versionKey : false,
})

const Cart = new mongoose.model('cart', cartSchema);

module.exports = Cart;