const express = require('express');

const PORT = process.env.PORT || 2000;

const path = require('path');

const connect = require("./confligs/db");

const static_path = path.join(__dirname,"../public")

const app = express();

app.use(express.json());

app.use(express.static(static_path));

app.set('view engine','ejs');

// app.use('/index', (req,res)=>{
//     res.render('index');
// })
// app.use('/random', (req,res)=>{

//     res.render('random');
// })
// app.use('/index/login', (req,res)=>{

// })
// app.use('/payment', (req,res)=>{
//     res.render('payment')
// })

// app.use('/cart', (req,res)=>{
//     res.render('cart')
// })

app.listen(PORT, async ()=> {
    try {
        await connect();
        console.log(`listening to port ${PORT}`);
    } catch (err) {
        console.log(err);
    }
})