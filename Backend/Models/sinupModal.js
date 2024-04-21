
const mongoose = require("mongoose");
const sinupSchema=new mongoose.Schema(

    {
        
        name:String,
        Email:String,
        PassWord:String,
     }
);
module.exports=mongoose.model("signData",sinupSchema)