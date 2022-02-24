const express = require("express");

const port = process.env.PORT || 2000;

const path = require("path");

const connect = require("./conflig/db");
// this is the models that we will require for this project

// product will have all the data
const Product = require("./models/product.model");
const productController = require("./controllers/product_controller");
// user will be the current user who is visiting the site
const User = require("./models/user.model");
const userController = require("./controllers/user_controller");

// wishlist will be depending on user parent child relationship
const Wishlist = require("./models/wishlist.model");
const wishlistController = require("./controllers/wishlist_controller");

// cart will be depending on user parent child relationship
const Cart = require("./models/cart.model");
const cartController = require("./controllers/cart_controller");

// address will be depending on user parent child relationship
const Address = require("./models/address.model");
const addressController = require("./controllers/address_controller");

const static_path = path.join(__dirname, "../public");
console.log('static_path:', static_path)

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(static_path));

app.set("view engine", "ejs");

// use the following routes to render your page with the data you required for your page
// app.use("/admin", adminController);
function updateRequestMethod(req, res, next) {
  if (req.body.method) {
    req.method = req.body.method; // req.method = "delete" route = /users/:id
    return next();
  }
  return next();
}

app.use(updateRequestMethod);

app.use("/cart", cartController);

app.use("/checkout.html", (req, res) => {
  res.render("checkout");
});

app.use("/product", productController);

app.use("/shopitem", productController);

app.use("/wishlist_layout", wishlistController);

app.use("/index", (req, res) => {
  try {
    res.render("index");
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

app.use("/checkout", (req, res) => {
  try {
    res.render("checkout");
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

app.use("/payment", (req, res) => {
  try {
    res.render("payment");
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

const {user_id} = require("./controllers/user_controller")

app.use("/register", userController);

console.log(user_id);

app.listen(port, async () => {
  try {
    await connect();
    console.log(`listening to port ${port}`);
  } catch (err) {
    console.log(err.message);
  }
});
