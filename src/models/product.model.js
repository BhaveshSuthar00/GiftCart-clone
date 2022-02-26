const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    product: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, required: true, default: 0 },
    category: { type: String, required: true },
    sub_category: { type: String, required: true },
    image: { type: String, required: true },
    stock_qty: { type: Number, required: true, default: 10 },
    description: { type: String, required: false },
  },
  {
    versionKey: false,   
  }
);

const Product = mongoose.model("product", productSchema);

module.exports = Product;
