import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Events from './pages/events/Events';
import Candidates from './pages/candidates/Candidates';
import Settings from './pages/settings/Settings';

function App() {
  return (
    <>
    <BrowserRouter>
      <Sidebar/>
       <div className="main">
       <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path = '/events' element={<Events/>}/>
        <Route path = '/candidates' element={<Candidates/>}/>
        <Route path='/settings' element={<Settings/>}/>
        <Route/>
      </Routes>
       </div>
      
      
      
      </BrowserRouter>
    </>
  );
}

export default App;
