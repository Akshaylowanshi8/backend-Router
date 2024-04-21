

import axios from "axios";
import { useState } from "react";
const Signin=()=>{

    const [user, setuser]=useState("")
const handinput=(e)=>{
let name =e.target.name;
let value=e.target.value;
setuser(values=>({...values,[name]:value}))
}

const onsubmit =()=>{
  console.log(user);
    let api="http://localhost:8000/Student/signupp"
    axios.post(api,user).then((res)=>{
     alert("data save")

     setuser( {
    name:"",
    email:"",
    password:"" 
})})

}
return(<>
<div className="section#entry-page">

            <h2>Sign Up!</h2>
            <fieldset>
              <legend>Create Account</legend>
              <ul>
                <li>
                  <label for="username">Username:</label>
                  <input type="text" id="username" required  name="name" value={user.name} onChange={handinput} />
                </li>
                <li>
                  <label for="email">Email:</label>
                  <input type="email" id="email" required name="email"  value={user.email} onChange={handinput}/>
                </li>
                <li>
                  <label for="password">Password:</label>
                  <input type="password" id="password" required name="password" value={user.password} onChange={handinput}/>
                </li>
              </ul>
            </fieldset>
            <button onClick={onsubmit}>Submit</button>
            <button type="button">Have an Account?</button>
</div>
</>)

}

export default Signin;