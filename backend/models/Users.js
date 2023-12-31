const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        // required:true,
    },
    age:{
        type:Number,
        // required:true,
    },
    userName:{
        type:String,
        // required:true,
    },
    firstName:{
        type:String,
        // required:true,
    },
    lastName:{
        type:String,
        // required:true,
    },
    email:{
        type:String,
        // required:true,
    },
    password:{
        type:String,
        // required:true,
    }
})

const UserModel = mongoose.model("userInfo",UserSchema)

module.exports = UserModel;