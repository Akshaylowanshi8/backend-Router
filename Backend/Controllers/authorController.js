
const AuthorModel=require("../Models/AuthorModal");
const BookModel = require("../Models/BookModal");
const SinupModel=require("../Models/sinupModal");
const jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
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

module.exports={AuthorAdd,
    AuthorDis,
    Addbook,
    BookDis,
    signupp

}
