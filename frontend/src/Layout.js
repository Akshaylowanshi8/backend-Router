import { Link, Outlet } from "react-router-dom";

const Layout=()=>{


return(<>
<div className="header">
<Link to="home">Home</Link>
<Link to="insert">insertStudent</Link>
<Link to="insertu">InsertUser</Link>




<Link to="tech">insertAuthoc</Link>
<Link to="techsal">AuthorRec</Link>

<Link to="userRec">UserRecord</Link>
<Link to="EmplSal">EmployeeSal</Link>


<Link to="student">studentRec</Link>
<Link to="studentFee">studentFee</Link>



</div>



<Outlet/>


<h1 className="">

    this  is footer</h1>

    </>)
}

export default Layout;