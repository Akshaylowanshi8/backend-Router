import { useState } from "react";
import  axios  from 'axios';


const ImageUpload =()=>{

const [input ,setinput]=useState({});
const [file ,setfile]=useState(" ")


const handFile=(e)=>{

setfile(e.target.files[0])

}

const handinput=(e)=>{
let name=e.target.name;
let value=e.target.value;
setinput(values=>({...values,[name]:value}))
}
const onsave = async()=>{


    // insert image in cloudnary
const formData=new FormData();
formData.append('file' ,file);
formData.append('upload_preset',"uyxjrpfg")
formData.append("cloud_name","dtom3zwun" )
const responce = await axios.post("https://api.cloudinary.com/v1_1/dtom3zwun/image/upload",formData)
console.log( responce.data.url);
// let api = "http://localhost:8000/Student/imageuplode"
// axios.post(api,input,).then((res) => {
//     console.log("save");
// })
// console.log("input");
}
return(<>

<div className="hpage">
Product Name :<input className="" name="name"  value={input.name} onChange={handinput} />
Product brand :<input className="" name="brand" value={input.brand} onChange={handinput} />
Product price :<input className="" name="price" value={input.price} onChange={handinput} />
Product image:<input className="" type="file" onChange={handFile}  />
<button className="" onClick={onsave}>save</button>

</div>
</>)
}

export default ImageUpload;