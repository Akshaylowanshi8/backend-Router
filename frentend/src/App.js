import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Layout from './Layout';
import './App.css';
import Home from './pages/Home';
import TeacherRec from './pages/TeacherRec';
import EmployeeRec from './pages/EmployeeRec';
import StudentRec from './pages/StudentRec';
import TeacherSal from './pages/TeacherSal';
import EmployeeSal from './pages/EmplSal';
import StudentFee from './pages/StudentFee';
import Insert from './pages/insert';


function App() {
  return (
  <>
<BrowserRouter>
<Routes>
<Route path='/' element={<Layout/>}>
<Route index element={ <Home/> } />
<Route path='home' element={ <Home/> } />
<Route path='insert' element={ <Insert/> } />

<Route path='tech' element={ <TeacherRec/> } />
<Route path='techsal' element={ <TeacherSal/> } />

<Route path='EmplRec' element={ <EmployeeRec/> } />
<Route path='EmplSal' element={ <EmployeeSal/> } />

<Route path='Student' element={ <StudentRec/> } />
<Route path='StudentFee' element={ <StudentFee/> } />

</Route>
</Routes>
</BrowserRouter>
  </>
  );
}

export default App;
