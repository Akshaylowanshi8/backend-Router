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
<h2 className="">{e.StuName}</h2>
</>)

})

 useEffect(()=>{
       Dataload();
       console.log(Empdata);
       },[])


    return(<>
{ans}
    </>)
    }
    
    
    export default StudentRec;