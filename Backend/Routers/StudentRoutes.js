const express = require("express");
const router = express.Router();

const Stucon=require("../Controllers/StudentController")


router.get("/Fee",Stucon.StudentFee)
router.get("/Rec",Stucon.StudentRec)
router.post("/Ins",Stucon.StudentRecInsert)
module.exports=router;