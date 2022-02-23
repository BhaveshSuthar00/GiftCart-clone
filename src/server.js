const express = require("express");

const port = process.env.PORT || 2000;

const path = require("path");

const connect = require("./conflig/db");
// this is the models that we will require for this project

// product will have all the data
const Product = require("./models/product.model");

// user will be the current user who is visiting the site
const User = require("./models/user.model");

// wishlist will be depending on user parent child relationship
const Wishlist = require("./models/wishlist.model");

// cart will be depending on user parent child relationship
const Cart = require("./models/cart.model");

// address will be depending on user parent child relationship
const Address = require("./models/address.model");

const static_path = path.join(__dirname, "../public");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(static_path));

app.set("view engine", "ejs");

// use the following routes to render your page with the data you required for your page
app.use("/admin.html", (req, res) => {
  res.render("admin", { text: "here" });
});
app.use("/cart.html", (req, res) => {
  res.render("cart");
});

app.use("/checkout.html", (req, res) => {
  res.render("checkout");
});

app.use("/index.html", (req, res) => {
  res.render("index", { text: "here" });
});

app.use("/jewellery.html", (req, res) => {
  res.render("jewellery");
});

app.use("/payment.html", (req, res) => {
  res.render("payment");
});

app.use("/perfume.html", (req, res) => {
  // const product = await Product.find({sub_category : 'perfumes' }).lean().exec();

  res.render("perfume", { product });
});

app.use("/random.html", (req, res) => {
  res.render("random");
});

app.use("/shopitem.html", (req, res) => {
  res.render("shopitem");
});

app.use("/wishlist_layout.html", (req, res) => {
  res.render("wishlist_layout");
});

app.listen(port, async () => {
  try {
    await connect();
    console.log(`listening to port ${port}`);
  } catch (err) {
    console.log(err.message);
  }
});

app.get("/", (req, res) => {
  try {
    res.render("index", { text: "here" });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});
