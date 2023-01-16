import React, { useState } from 'react';
import './modal.css';

const Modal = ({visibility,hide,adminInfo}) => {
   
  const newArray= Array.from(adminInfo).map((info)=>info);
  
    const [username,setUserName] = useState("");
    const handleUpdate = async () => {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username : username,
                contact : adminInfo.contact,


             })
        };
        const response = await fetch('https://localhost:5000/admin/4', requestOptions);
        const data = await response.json();
}

    if(!visibility) return null;
    
    
  return (
    <>
    <div className="username-modal">
    <button className='username-btn' onClick={hide}>x</button>
    <h3 className='update-username mb-5'>Update Username</h3>
    <div class="form-floating mb-3 w-75">
            <input type="text" className="form-control" value={username} placeholder="Event Name" onChange={(e)=>setUserName(e.target.value)} />
            <label htmlFor="user-name">Username</label>
            </div>
            <button className='btn btn-dark w-50 mt-3' onClick={handleUpdate}>Update</button>
    </div>
    </>
  )
}

export default Modal;