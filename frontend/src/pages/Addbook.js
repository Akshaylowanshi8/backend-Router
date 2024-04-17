import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Addbook=()=>{
 const [Nbook ,setbook] =useState("")
   const {id }=useParams();

   const handinput=(e)=>{

    let name =e.target.name;
    let value=e.target.value;
   setbook(values=>({...values,[name]:value,id}))
}
console.log(Nbook)
 const senddata=async()=>{
    let api="http://localhost:8000/Student/Addbook" 
     axios.post(api,Nbook).then((data)=>{
    alert("datasave")
     })
    
    
    setbook
    (
    {
     book:" ",
     price:" ",
    }
    
    )
    }




return(
<>

<div className="">
<input className=""  type="hidden" name="id"  value={Nbook.id} onChange={handinput}  />
book Titel : <input className="" name="book" value={Nbook.book} onChange={handinput}    />
book price :<input className="" name="price"  value={Nbook.price} onChange={handinput}/>
<button className="" onClick={senddata}>Add book</button>


</div>



</>

)

}

export default Addbook;