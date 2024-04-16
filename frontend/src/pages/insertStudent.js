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
 Name :<input name="name" className=""  value={data.name} onChange={handleinput}/>
 Roll No :<input name="rollno" className=""value={data.rollno} onChange={handleinput} />
City :<input name="city" className=""value={data.city} onChange={handleinput} />
Fees :<input name="fee" className=""value={data.fee} onChange={handleinput} />
 <button   onClick={onsubmit}>Save</button>

</div>
</div>

</>}

export default Insert;