import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Events from './pages/events/Events';
import Candidates from './pages/candidates/Candidates';
import Settings from './pages/settings/Settings';
import { useEffect, useState } from 'react';

function App() {
  const [adminInfo,setAdminInfo] = useState([]);
   const fetchData = async () => {
    const response = await fetch('http://localhost:5000/admin')
    const data = await response.json();
    setAdminInfo(data);

    
   }
   useEffect(()=>{
    try{
      fetchData();
    }catch(err){
      console.log(err.message)
    }
   },[])
  return (
    <>
    <BrowserRouter>
      <Sidebar adminInfo = {adminInfo}/>
       <div className="main">
       <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path = '/events' element={<Events/>}/>
        <Route path = '/candidates' element={<Candidates/>}/>
        <Route path='/settings' element={<Settings adminInfo={adminInfo}/>}/>
        <Route/>
      </Routes>
       </div>
      
      
      
      </BrowserRouter>
    </>
  );
}

export default App;
