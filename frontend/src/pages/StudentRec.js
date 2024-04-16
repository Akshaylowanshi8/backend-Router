import { useState ,useEffect} from "react"

import axios from "axios";

const StudentRec=()=>{

    const [Empdata ,SetEmpdata]=useState([])

    const Dataload=()=>{
   axios.get("http://localhost:8000/Student/Rec").then((res) => {
   SetEmpdata(res.data)
})}
useEffect(()=>{
  Dataload();
},[])
const DelStuRec=(id)=>{
    axios
      .post("http://localhost:8000/Student/DelStuRec",{id:id})
      .then(res =>alert("successful remove") )
}
const test=(e)=>{
let opt =e.target.value;
if(opt==="name")
{
// sort by name
Empdata.sort((a, b) => {
  const nameA = a.StuName.toUpperCase(); // ignore upper and lowercase
  const nameB = b.StuName.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1; 
  }
  if (nameA > nameB) {
    return 1;
  }
// names must be equal
  return 0;
});
}
if(opt==="fees")
{
Empdata.sort((a, b) => a.Fees- b.Fees);
// console.log(Empdata);
}


}

console.log(Empdata);

// Empdata.sort((a, b) => a.Fees- b.Fees);
let ans=Empdata.map((e)=>{
return(
<>
 <tr>
    <td>{e.StuName}</td>
    <td>{e.RollNo}</td>
    <td>{e.city}</td>
    <td>{e.Fees}</td>
  <td ><button onClick={()=>DelStuRec(e._id)}>Delete</button></td>
 </tr>
</>)
})


return(<>
<select  onClick={test} id="sortbtn">
    <option id="1" value="name" >sort by Name</option>
    <option id="2" value="fees">sort by Fees </option>
</select>
    <div className="tdiv">

    <table>
<tr>
<th>Student Name</th>
<th>RollNo</th>
<th>City</th>
<th>fees</th>
<th>Delete</th>
</tr>

{ans}
    </table>
</div>

    </>)
    }
    
    
    export default StudentRec;