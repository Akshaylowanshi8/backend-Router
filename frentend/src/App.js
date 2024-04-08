import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Layout from './Layout';
import './App.css';
import Home from './pages/Home';
import TecherRec from './pages/TecherRec';
import EmployeeRec from './pages/EmployeeRec';
import StudentRec from './pages/StudentRec';
import TecherSal from './pages/TecherSal';
import EmployeeSal from './pages/EmplSal';
import StudentFee from './pages/StudentFee';


function App() {
  return (
  <>
<BrowserRouter>
<Routes>
<Route path='/' element={<Layout/>}>
<Route index element={ <Home/> } />
<Route path='home' element={ <Home/> } />
<Route path='tech' element={ <TecherRec/> } />
<Route path='techsal' element={ <TecherSal/> } />

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
