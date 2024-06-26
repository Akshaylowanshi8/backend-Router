const express = require("express");
const app=express();
const mongoose = require("mongoose");
require('dotenv').config()

// cross origin resource searing by use becouse we are use react frontend   =>it is called middil wear 
const cors = require('cors');
app.use(cors());


//  -> its a middil Weare 
const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

//mongodb connection
mongoose.connect(process.env.DATABASE_URL+process.env.DBNAME)
.then(console.log(" datbase connected "));


const StuRouts =require("./Routers/StudentRoutes")


app.get("/home",(req,res)=>{
res.send("hello get home")
})
//middilweare  app type 
const mycollege=(req,res,next)=>{
req.mycol="we are cybrom student "
next()
}
app.use(mycollege)
app.get("/",(req,res)=>{
let mydata="http request send by user :" +req.mycol;
res.send(mydata)
  })

const midd1 =(req,res,next)=>{
req.v1="hello this  is bhopals";
next()
}
app.use(midd1)
app.get("/bhopal",(req,res,next)=>{
req.var1="hello ";
next()
},(req,res)=>{
let mydata="midew :"+req.v1; 
  res.send(mydata)
})
app.use("/student",StuRouts);
const port = process.env.PORT || 8000;

app.listen(port, () =>{ 
    console.log((`Example app listening on port ${port}!`))
  })