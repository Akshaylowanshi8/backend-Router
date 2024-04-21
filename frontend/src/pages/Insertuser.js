import { useState } from "react";
import axios from "axios";


const InsertUser=()=>{
const [data ,setdata]=useState({}) 

const handleinput=(e)=>{
let name =e.target.name;
let value=e.target.value;
setdata(values=>({...values,[name]:value}))
// console.log(data);
}
// console.log(data);
const onsubmit =()=>{
    let api="http://localhost:8000/Student/user"
    axios.post(api,data).then((res)=>{
     alert("data save")

setdata( {
    name:" ",
    lastname:" ",
    Email:" ",
    username:" "
   
})
})}
return<>
<div className="hpage">
<div className="insert">
<label>Username:<input name="username" className=""value={data.username} placeholder="Enter Username" onChange={handleinput} /></label>
<label>Email:<input name="Email" className=""value={data.Email} onChange={handleinput} /></label>
<label>First Name :<input name="name" className=""  value={data.name} onChange={handleinput}/></label>
<label> last Name  :<input name="lastname" className=""value={data.lastname} onChange={handleinput} /></label>
<label> <button  id="btn" onClick={onsubmit}>Save</button></label>
</div>
</div>
</>
}

export default InsertUser;