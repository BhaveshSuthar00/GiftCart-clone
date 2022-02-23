const express = require("express");

const PORT = process.env.PORT || 2000;

const path = require("path");

const connect = require("./conflig/db");

const static_path = path.join(__dirname, "../public");

const app = express();

app.use(express.json());

app.use(express.static(static_path));

app.set("view engine", "ejs");

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
  res.render("perfume");
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

app.listen(PORT, async () => {
  try {
    await connect();
    console.log(`listening to port ${PORT}`);
  } catch (err) {
    console.log(err.message);
  }
});
