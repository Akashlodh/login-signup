const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/employs")

const employSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String

})

const userModel = mongoose.model("user" , employSchema);
module.exports= {userModel}


