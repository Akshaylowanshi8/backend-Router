
const AuthorModel=require("../Models/AuthorModal");
const BookModel = require("../Models/BookModal");


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




module.exports={AuthorAdd,
    AuthorDis,

}
