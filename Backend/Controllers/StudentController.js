const StudModal =require("../Models/StudentModel")
const ProfModal=require("../Models/ProfileModal")
const userModal=require("../Models/usermodals")
const StudentRec=async(req,res)=>{

    StudModal.find().then((data) => {
        res.send(data)
    })}
const StudentFee=async(req,res)=>{
res.send("hello your fee is 30000")
}
const StudentRecInsert=async(req,res)=>{
    let city=req.body.city;
    let fee =req.body.fee;   
    let name =req.body.name;
    let rollno=req.body.rollno;
 const studentData = new StudModal({
    StuName:name,
    RollNo:rollno,
    city:city,
    Fees:fee,
})
studentData.save();
res.send("data save")
}

const DelStuRec=async(req,res)=>{
 let id =req.body.id;
console.log(id); 
}

const UserAdd=async(req,res)=>{
let Username=req.body.username;
let Email=req.body.Email;
let Fname=req.body.name;
let Lname=req.body.lastname;
 
// its a relationship Modale feach data 
const user = await userModal.create({
    username:Username,
    email:Email,
})

const Profile= await ProfModal.create({

    userID:user._id,
    firstname:Fname,
    lastname:Lname,
})
res.status(200).json({user,Profile})
}

const UserRec =async(req,res )=>{

const profileData=await ProfModal.find().populate("userID");
// console.log(profileData);
    res.send(profileData)
   






}


module.exports={
    StudentRec,
    StudentFee,
    StudentRecInsert,
    DelStuRec,
    UserAdd,
    UserRec,

}