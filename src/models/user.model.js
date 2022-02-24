const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    first_name : {type : String, required : true},
    last_name : {type : String, required : true},
    email : {type : String, required : true, unique: true},
    password : {type : String , required : true, minLength :8, maxLength :15},
    confirm_password : {type : String , required : true, minLength :8, maxLength :15},
},{
    versionKey : false,
})

const User = mongoose.model('user', userSchema);

module.exports = User;