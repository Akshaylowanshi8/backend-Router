const express = require("express");
const router = express.Router();
router.get("/Fee",(req,res)=>{
res.send("your fee is 2000")

})
module.exports=router;