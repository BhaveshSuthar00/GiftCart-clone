const mongoose = require("mongoose");

const cartSingleSchema = new mongoose.Schema(
    {
    user_id : { type: String, required: true },
    product_id: [{ type: mongoose.Schema.Types.ObjectId,ref : 'product', required: true }],
    },
    {
    versionKey: false,
    }
);

const CartSingle = mongoose.model("cartsingle", cartSingleSchema);

module.exports = CartSingle;
