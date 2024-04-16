const mongoose = require("mongoose");
 const ProfileSchema = new mongoose.Schema(
    {
        userID:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
            unique:true

        },
        firstname:String,
        lastname:String
    }
 )

 module.exports=mongoose.model("profile",ProfileSchema )