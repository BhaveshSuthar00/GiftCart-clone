const express = require("express");

const port = process.env.PORT || 2000;

const path = require("path");

const passport = require("./conflig/google-oauth");

const connect = require("./conflig/db");
// this is the models that we will require for this project

// product will have all the data
const Product = require("./models/product.model");
const productController = require("./controllers/product_controller");
// user will be the current user who is visiting the site
const User = require("./models/user.model");
// const userController = require("./controllers/user_controller");

// wishlist will be depending on user parent child relationship
const Wishlist = require("./models/wishlist.model");
const wishlistController = require("./controllers/wishlist_controller");

// cart will be depending on user parent child relationship
const Cart = require("./models/cart.model");
const cartController = require("./controllers/cart_controller");

// address will be depending on user parent child relationship
const Address = require("./models/address.model");
const addressController = require("./controllers/address_controller");
const adminController = require("./controllers/admin_controller");

const checkoutController = require("./controllers/checkout_controller");

const shopitemController = require('./controllers/shopitem_controller');
const { newToken, router } = require("./controllers/user_controller");

const static_path = path.join(__dirname, "../public");

// console.log('static_path:', static_path)

const app = express();

const bodyParser = require("body-parser");
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(static_path));
app.set("view engine", "ejs");
// -----------------------------------------GOOGLE OAUTH-----------------------------------------------------

passport.serializeUser(function (user, done) {
  done(null, user);
  // if you use Model.id as your idAttribute maybe you'd want
  // done(null, user.id);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/auth/google/failure",
  }),
  (req, res) => {
    let { user } = req;
    const token = newToken(user);
    res.cookie("Bearer ", token, { httpOnly: true });
    return res.redirect("/index");
  }
);

function updateRequestMethod(req, res, next) {
  if (req.body.method) {
    req.method = req.body.method; // req.method = "delete" route = /users/:id
    return next();
  }
  return next();
}

app.use(updateRequestMethod);

const { authenticate } = require("./middlewares/authenticate");

app.get("/yashraj", authenticate, async (req, res) => {
  try {
    if (req.user != undefined) {
      return res.status(200).json({ user: req.user });
    }
  } catch (error) {
    return res.status(500).send({ logged: "not user" });
  }
});

app.get("/karthik", authenticate, async (req, res) => {
  try {
    res.clearCookie("Bearer");
    res.status(200).json({ message: "sign out success" });
  } catch (error) {
    return res.status(500).send({ message: "sign out error" });
  }
});

app.use("/cart",authenticate, cartController);
app.use("/admin", adminController);
app.use("/product", productController);
app.use("/checkout",authenticate, checkoutController);
app.use("/wishlist_layout", wishlistController);
app.use("/shopitem", shopitemController);
app.use("/register", router);

app.get("/payment",authenticate, async (req, res) => {
  try {
    let user_id = req.user._id;
    const cart = await Cart.findOne({user_id : user_id}).populate({path : "product_ids"}).lean().exec();
    const address = await Address.findOne({user_id : user_id}).lean().exec();
    res.render("payment", {items : cart.product_ids, address : address});
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

app.use("/shopitem", productController);
app.use("/register", router);

app.use('/index', async (req, res) =>{
  try {
    res.render('index');
  }
  catch (err) {
    res.render('error')
  }
})
app.use("/", async (req, res) => {
  try {
    res.render("index");
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

app.use("/admin", (req, res) => {
  try {
    res.render("admin");
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

// app.get("/payment", (req, res) => {
//   try {
//     res.render("payment");
//   } catch (err) {
//     return res.status(500).send({ message: err.message });
//   }
// });

app.listen(port, async () => {
  try {
    await connect();
    console.log(`listening to port ${port}`);
  } catch (err) {
    console.log(err.message);
  }
});
