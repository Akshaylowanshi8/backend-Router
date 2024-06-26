const express = require("express");
const router = express.Router();

const Stucon=require("../Controllers/StudentController")
const Authorcon=require("../Controllers/authorController");


router.get("/Fee",Stucon.StudentFee)
router.get("/Rec",Stucon.StudentRec)
router.post("/Ins",Stucon.StudentRecInsert)
router.post("/DelStuRec",Stucon.DelStuRec )
router.post("/user", Stucon.UserAdd)
router.get("/userRec",Stucon.UserRec)
router.post("/autorAdd",Authorcon.AuthorAdd)
router.get("/AuthorDis",Authorcon.AuthorDis)
router.post("/Addbook",Authorcon.Addbook)
router.get("/BookDis",Authorcon.BookDis)
router.post("/signupp",Authorcon.signupp)
router.post("/Login",Authorcon.Login)


module.exports=router;