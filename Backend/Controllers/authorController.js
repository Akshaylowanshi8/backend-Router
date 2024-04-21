
const AuthorModel=require("../Models/AuthorModal");
const BookModel = require("../Models/BookModal");
const SinupModel=require("../Models/sinupModal");
const jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
// var salt = bcrypt.genSaltSync(10);
var secret_key="akshay";
let user_id ="";
const AuthorAdd=async(req,res)=>{
    let Aname =req.body.aname;
    let price =req.body.price;
    let book =req.body.book;
const author=  await AuthorModel.create({name:Aname});
const Book= await BookModel.create({booktital:book,price:price,authorid:author._id });
 await AuthorModel.findByIdAndUpdate(author._id,{$push : { books:Book._id}});
res.send("ok")
 }


const AuthorDis=async(req,res)=>{
   let  mydata =  await BookModel.find().populate("authorid");

    res.send(mydata)
    }

const Addbook =async(req,res)=>{

    let aid=req.body.id;
    let booktital=req.body.book;
    let price =req.body.price;
    
    let book=await BookModel.create({booktital:booktital,price:price,authorid:aid })
    await AuthorModel.findByIdAndUpdate(aid,{$push :{books:book._id}});
    
   res.send("ok")
}


const BookDis=async(req,res)=>{
    let  mydata =  await AuthorModel.find().populate("books");

    res.send(mydata)
        }

    const signupp=async(req,res)=>{
       let  Email =req.body.email;
       let  username =req.body.name;
       let pas =req.body.password;
   console.log(pas);

var hash = bcrypt.hashSync(pas,10);
console.log(hash);
let  user =await SinupModel.create({name:username,Email:Email,PassWord:hash})
    res.send("save")
    }

  
// ------------------Login----------------   
 const Login=async(req,res)=>{

let {name,password}=req.body;
const user=await SinupModel.findOne({name})

if(!user){

    res.send("invalid user")
}

const isvalidpass = await bcrypt.compare(password,user.PassWord)
// console.log(isvalidpass);
if(!isvalidpass)
{
   return res.send("invalid password")
}

const token = jwt.sign({userid:user_id,username:user.name,email:user.Email},secret_key)
console.log(token);
        res.status(200).json({token,username:user.name})
}
module.exports={AuthorAdd,
    AuthorDis,
    Addbook,
    BookDis,
    signupp,
    Login
}
