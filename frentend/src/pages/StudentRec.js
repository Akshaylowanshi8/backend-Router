import { useState ,useEffect} from "react"

import axios from "axios";

const StudentRec=()=>{

    const [Empdata ,SetEmpdata]=useState([])

    const Dataload=()=>{
   axios.get("http://localhost:8000/Student/Rec").then((res) => {
   SetEmpdata(res.data)
})}

let ans=Empdata.map((e)=>{
return(<>
 <tr>
    <td>{e.StuName}</td>
    <td>{e.RollNo}</td>
    <td>{e.city}</td>
    <td>{e.Fees}</td>
 </tr>


</>)

})

 useEffect(()=>{
       Dataload();
        },[])


    return(<>

    <table>
<tr>
<td>Student Name</td>
<td>RollNo</td>
<td>City</td>
<td>fees</td>
</tr>

{ans}
    </table>

    </>)
    }
    
    
    export default StudentRec;