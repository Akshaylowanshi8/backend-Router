import { useState ,useEffect} from "react"
import axios from "axios"

const AuthorDis=()=>{

    const [Empdata ,SetEmpdata]=useState([])

    const Dataload=()=>{
   axios.get("http://localhost:8000/Student/AuthorDis").then((res) => {
   SetEmpdata(res.data)
})}
useEffect(()=>{
  Dataload();
},[])
console.log(Empdata);


let ans =Empdata.map((e)=>{


  return(
  <tr>
  
  
  <td>{e.booktital}</td>
  <td>{e.price}</td>
  <td>{e.booktital}</td>

  </tr>

  )

})


    return(<>
    {ans}
    </>)
    
    
    }
    
    
    export default AuthorDis;