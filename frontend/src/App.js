import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Layout from './Layout';
import './App.css';
import Home from './pages/Home';
import TeacherRec from './pages/autherRec';
import StudentRec from './pages/StudentRec';
import EmployeeSal from './pages/EmplSal';
import StudentFee from './pages/StudentFee';
import Insert from './pages/insertStudent';
import InsertUser from './pages/Insertuser';
import UserRec from './pages/UserRec';
import AuthorDis from './pages/AuthorDis';
import Addbook from './pages/Addbook';
import BookDis from './pages/BookDis';
import Login from './pages/Login';
import Signin from './pages/Signin';


function App() {
  return (
  <>
<BrowserRouter>
<Routes>
<Route path='/' element={<Layout/>}>
<Route index element={ <Home/> } />

<Route path='login' element={ <Login/>} />
<Route path='signin' element={ <Signin/> } />



<Route path='home' element={ <Home/> } />
<Route path='insert' element={ <Insert/> } />
<Route path='insertu'element={<InsertUser/>}/>
<Route path='Addbook/:id' element={<Addbook/>}/>
<Route path='bookdis' element={<BookDis/>}/>



<Route path='tech' element={ <TeacherRec/> } />
<Route path='techsal' element={ <AuthorDis/> } />

<Route path='userRec' element={ <UserRec/>} />
<Route path='EmplSal' element={ <EmployeeSal/> } />

<Route path='Student' element={ <StudentRec/> } />

</Route>
</Routes>
</BrowserRouter>
  </>
  );
}

export default App;
