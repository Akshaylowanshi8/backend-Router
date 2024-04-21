const mongoose = require("mongoose");
const StudentSchema=new mongoose.Schema(

    {
        
        StuName:String,
        RollNo:Number,
        city:String,
        Fees:Number,
       
    }
)
module.exports=mongoose.model("StudentData",StudentSchema)