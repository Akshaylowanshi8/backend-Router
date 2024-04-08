import { Link, Outlet } from "react-router-dom";


const Layout=()=>{


    return(<>

<div className="header">
<Link to="home">Home</Link>
<Link to="tech">TecherRec</Link>
<Link to="techsal">Techersal</Link>

<Link to="EmplRec">EmployeeRec</Link>
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