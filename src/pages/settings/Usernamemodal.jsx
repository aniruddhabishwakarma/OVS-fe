import React, { useState } from 'react';
import './usernamemodal.css';

const Usernamemodal = ({visibility,hide,adminInfo}) => {

  const[username,setUserName]= useState("");
  const adminInfoObject = {...adminInfo[0]};
  
    const handleUpdate = async () => {
      try{
        const requestOptions = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            username : username,
            contact: adminInfoObject.contact,
            email: adminInfoObject.email
           })
      };
      const response = await fetch('http://localhost:5000/admin/4', requestOptions);
      console.log(response);
      const data = await response.json();
      setUserName("");
      alert('Update Succesful');
      }catch(err){
        console.log(err.message);
      }
      

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

export default Usernamemodal;