const mongoose = require("mongoose");

const Bookschema=new mongoose.Schema({


    booktital:String,
    price:Number,
    authorid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Author",
},
})

module.exports=mongoose.model("Book",Bookschema )
