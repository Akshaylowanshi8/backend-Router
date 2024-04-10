const StudModal =require("../Models/StudentModel")
const StudentRec=async(req,res)=>{

    StudModal.find().then((data) => {
        res.send(data)
    })
}
const StudentFee=async(req,res)=>{
res.send("hello your fee is 30000")
}
const StudentRecInsert=async(req,res)=>{
    let city=req.body.city;
    let fee =req.body.fee;   
    let name =req.body.rollno;
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
module.exports={
    StudentRec,
    StudentFee,
    StudentRecInsert

}