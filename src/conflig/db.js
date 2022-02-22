const mongoose = require('mongoose');


module.exports = () => {
    return mongoose.connect(
        'mongodb+srv://bhavesh:bhavesh_98333@cluster0.wszxi.mongodb.net/Gift_cart?retryWrites=true&w=majority'
    )
}
