const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
    user_id : {type : mongoose.Schema.Types.ObjectId,ref : 'user', required : true},
    product_ids : [{type : mongoose.Schema.Types.ObjectId, ref : 'product', required : true},]
},{
    versionKey : false,
})

const Wishlist = mongoose.model('wishlist', wishlistSchema);

module.exports = Wishlist;   