import { useState ,useEffect} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"


const AuthorDis=()=>{
  let Navigat=useNavigate()
    const [Empdata ,SetEmpdata]=useState([])

    const Dataload=()=>{
   axios.get("http://localhost:8000/Student/AuthorDis").then((res) => {
   SetEmpdata(res.data)
})}
useEffect(()=>{
  Dataload();
},[])



let addbook=(id)=>{
  Navigat("/Addbook/"+id)


}


let ans =Empdata.map((e)=>{


  return(
  <tr>
  
  <td>{e.authorid.name}</td>
  <td>{e.booktital}</td>
  <td>{e.price}</td>
  <td><button className="" onClick={()=>addbook(e.authorid._id)}>Add book</button></td>


  </tr>

  )

})


    return(<>
  <table className="">

<tr>
<th>author name</th>
  <th>book Titel</th>
  <th>price</th>
  <th> Add book</th>
  
</tr>
    {ans}</table>
    </>)
    
    
    }
    
    
    export default AuthorDis;