import { useState ,useEffect} from "react"

import axios from "axios";

const StudentFee=()=>{

    const [Empdata ,SetEmpdata]=useState("")

    const Dataload=()=>{
   axios.get("http://localhost:8000/Student/Fee").then((res) => {
   SetEmpdata(res.data)
})}

 useEffect(()=>{
       Dataload();
 },[])

 console.log(Empdata);

    return(<>
    student Resc : {Empdata}
    </>)
    
    
    }
    
    
    export default StudentFee;