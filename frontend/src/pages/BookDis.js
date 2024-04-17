import { useState ,useEffect} from "react"
import axios from "axios"


const BookDis=()=>{
 
    const [Empdata ,SetEmpdata]=useState([])

    const Dataload=()=>{
   axios.get("http://localhost:8000/Student/BookDis").then((res) => {
   SetEmpdata(res.data)
})}
useEffect(()=>{
  Dataload();
},[])

console.log(Empdata);



let ans =Empdata.map((e)=>{
return(
  <tr>
  

<td>{e.name}</td>
<td>{
  
  
e.books.map((key)=>{
return(<>

<span className="">{key.booktital}</span>  ,  

</>)

})
}</td>
  


  </tr>

  )

})


    return(<>
  <table className="">

<tr>
<th>author name</th>
  <th>book Titel</th>
  </tr>
{ans}
    </table>
    </>)
    
    
    }
    
    
    export default BookDis;