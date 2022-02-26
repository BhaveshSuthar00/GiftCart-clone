
const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    first_name : {type : String, required : true},
    last_name : {type : String, required : true},
    street_address : {type : String, required : true},
    city : {type : String, required : true},
    state : {type : String, required : true},
    pincode : {type : Number, required : true},
    country : {type : String , required : true},
    phone_number : {type : Number, required : true},
    user_id : {type : mongoose.Schema.Types.ObjectId, ref : 'user', required : true},
},{
    timestamps : true,
})

const Address = new mongoose.model('address', addressSchema);

module.exports = Address;