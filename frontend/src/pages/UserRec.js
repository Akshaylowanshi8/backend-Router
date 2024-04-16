
import { useEffect, useState } from 'react';
import axios from 'axios';


const UserRec=()=>{

const [user ,setuser]=useState([])

const loaddata =()=>{

axios.get("http://localhost:8000/Student/userRec").then((res) => {
    setuser(res.data)
})
}
 useEffect(()=>{
    loaddata();
   },[])

//    console.log(user);
let  ans =user.map((e) => {
return(<>
<tr>
<td>{e.firstname}</td>
<td>{e.lastname}</td>
<td>{e.userID.username}</td>
<td>{e.userID.email}</td>
</tr>
</>)

})

    return(<>
<table className="">
<tr>

    <td>name</td>
    <td>lastname</td>
    <td>username</td>
    <td>Email</td>

</tr>
{ans}
</table>

    </>)
    
    
    }
    
    
    export default UserRec;