import { useState } from "react";
import axios from "axios";


const Login=()=>{

  const [user ,setuser]=useState({})
  
  

  
const handleinput=(e)=>{

  let val=e.target.value;
  let name=e.target.name;
 setuser(values=>({...values,[name]:val}))

}

const Login=()=>{

  console.log(user);
  let api="http://localhost:8000/Student/Login"
  axios.post(api,user).then((res)=>{
   alert(res.data)
     
  setuser( {
  username:"",
  password:"" 
})})


}
    return(<>
   <form>
            <h2>Welcome Back!</h2>
            
              <legend>Log In</legend>
              <ul>
                <li>
                  <label for="username">Username:</label>
                  <input type="text" id="name" required  name="name" value={user.name} onChange={handleinput}/>
                </li>
                <li>
                  <label for="password">Password:</label>
                  <input type="password" id="password" required name="password" value={user.password} onChange={handleinput}/>
                </li>
                 </ul>
           
            <button onClick={Login}>Login</button>
            <button type="button" >Create an Account</button>
          </form>

    </>)
}

export default Login ;