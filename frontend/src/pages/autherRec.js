import axios from "axios";
import { useState } from "react";
const TecherRec=()=>{

    const [input ,setinput]=useState("")


    const handinput=(e)=>{

        let name =e.target.name;
        let value=e.target.value;
       setinput(values=>({...values,[name]:value}))

    }
const senddata=async()=>{
let api="http://localhost:8000/Student/autorAdd " 
 axios.post(api,input).then((data)=>{
alert("datasave")
 })


setinput
(
 {aname:"",
 book:" ",
 price:" ",


}

)


    }
return(<>
<div className="hpage">
<div className="insert">
Author Name : <input className="" name="aname" value={input.aname} onChange={handinput}/>
BookTitel: <input className="" name="book" value={input.book} onChange={handinput}  />
Price : <input className="" name="price" value={input.price} onChange={handinput}/>
<button onClick={senddata} >Add Author</button>
</div>

</div>


</>)
}


export default TecherRec;