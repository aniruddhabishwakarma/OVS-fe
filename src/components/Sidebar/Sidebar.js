import React,{useState} from 'react';
import {NavLink} from 'react-router-dom';
import './sidebar.css'

const Sidebar = (props) => {
    const sidebarStyle = {
        height:"100%",
        width:'200px',
        position: "fixed",
    /* Stay in place */
        zIndex: "1",
        top:'0',
        left: '0',
        backgroundColor:'#000000',
        overflowX: 'hidden',
        paddingTop:'20px',
        transition: '0.5s'
    }
    const [position,setPosition] = useState(sidebarStyle);
    const closeNav = () =>{
        setPosition({...position,width:'0px'})

    }
   
  return (
    <div id="mySidebar" className="sidebar" style={position}>
    <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        alt=""/>
        {
            Array.from(props.adminInfo).map((info)=>{
                return <p>{info.username}</p>
            })
        }
    
    {/* <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a> */}
    <NavLink to='/'><i className="bi bi-house-door"></i> Dashboard</NavLink>
    <NavLink to='/events'><i className="bi bi-people"></i> Events</NavLink>
    <NavLink to='/candidates'><i className="bi bi-bell-fill"></i> Candidates</NavLink>
    <NavLink to= '/settings'><i className="bi bi-gear-fill"></i> Settings</NavLink>
    <NavLink>Logout</NavLink>
</div>
  )
}

export default Sidebar