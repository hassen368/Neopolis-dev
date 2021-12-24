const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require("bcrypt")
const UserSchema = new Schema({
    firstName :{
        type:String,
        required:true
    },
    lastName : {
        type:String,
        required:true
    },
    email :{
        type:String,
        trim : true,
        required:true
    },
    password :{
        type:String,
        trim : true,
        required:[true,"password is required"]
    },
},{timestamps:true})

UserSchema.pre("save",function(next){
    this.password=bcrypt.hashSync(this.password,10);
    next();
})

module.exports=mongoose.model("Users",UserSchema);