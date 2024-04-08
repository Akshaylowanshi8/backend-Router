import { useState ,useEffect} from "react"

import axios from "axios";


const Home=()=>{

    const [homedata ,Sethomedata]=useState("")

    const Dataload=()=>{
   axios.get("http://localhost:8000/home").then((res) => {
   Sethomedata(res.data)
})}

 useEffect(()=>{
       Dataload();
 },[])




    return(<>

 helllo :{homedata}

<p className="homed"> <h5 >Why is important to keep all employee record types?</h5> 
Keeping all employee record types can greatly contribute to the success and effectiveness <br/> of your human resources department. There are several important benefits of keeping all employee records, including:</p>
    </>)
}

export default Home;

