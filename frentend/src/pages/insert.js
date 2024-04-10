import { useState } from "react";
import axios from "axios";


const Insert=()=>{
const [data ,setdata]=useState({}) 

const handleinput=(e)=>{
let name =e.target.name;
let value=e.target.value;
setdata(values=>({...values,[name]:value}))
// console.log(data);
}
const onsubmit =()=>{
    let api="http://localhost:8000/Student/Ins"
    axios.post(api,data).then((res)=>{
     alert(res.data)

setdata( {
    name:" ",
    city:" ",
    rollno:" ",
    fee:" ",
})
})}
return<>
<div className="hpage">
<div className="insert">
<label> Name :<input name="name" className=""  value={data.name} onChange={handleinput}/></label>
<label> Roll No :<input name="rollno" className=""value={data.rollno} onChange={handleinput} /></label>
<label>City :<input name="city" className=""value={data.city} onChange={handleinput} /></label>
<label>Fees :<input name="fee" className=""value={data.fee} onChange={handleinput} /></label>
<label> <button  id="btn" onClick={onsubmit}>Save</button></label>

</div>
</div>



</>
}

export default Insert;