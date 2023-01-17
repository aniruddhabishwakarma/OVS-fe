import React, { useState } from 'react'
import './passwordmodal.css'

const Passwordmodal = ({visibility,hide,adminInfo}) => {
    const [currentPassword,setCurrentPassword] = useState("");
    const [newPassword,setNewPassword]= useState("");
    const [confirmPassword,setConfirmPassword]= useState("");
    const [error,setError] = useState({
        currentPasswordError : "",
        newPasswordError : "",
        confirmPasswordError : ""
    })

    function validate(e){
        if(!currentPassword|| !newPassword || !confirmPassword){
            alert("Fields cannot be empty");
            e.preventDefault();
        }
        if(newPassword.length<=8){
            setError({...error,newPasswordError:"Must be of 8 characters or more"})
            e.preventDefault();
        }
        if(newPassword!= confirmPassword){
            setError({...error,confirmPasswordError:"Passwords do not match"})
            e.preventDefault();
        }
    }

    const handleUpdate = async (e) => {
        
        try{
            validate();
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                  password: currentPassword,
                  newPassword : newPassword
                 })
            };
            const response = await fetch('http://localhost:5000/admin/4', requestOptions);
            console.log(response);
            const data = await response.json(); 
            alert('Update Succesful');
        }catch(err){
            console.log(err);
        }

    }
    if(!visibility) return null;
  return (
    <div className="password-modal">
    <button className='password-btn' onClick={hide}>x</button>
    <h3 className='update-password mb-5'>Update Password</h3>
    <div class="form-floating mb-3 w-75">
            <input type="password" className="form-control" value={currentPassword} placeholder="Password" onChange={(e)=>setCurrentPassword(e.target.value)} />
            <label htmlFor="current-password">Current Password</label>
            <small>{error.currentPasswordError}</small>
    </div>
    <div class="form-floating mb-3 w-75">
            <input type="password" className="form-control" value={newPassword} placeholder="Password" onChange={(e)=>setNewPassword(e.target.value)} />
            <label htmlFor="current-password">New Password</label>
            <small>{error.newPasswordError}</small>
    </div>
    <div class="form-floating mb-3 w-75">
            <input type="password" className="form-control" value={confirmPassword} placeholder="Password" onChange={(e)=>setConfirmPassword(e.target.value)} />
            <label htmlFor="current-password">Confirm Password</label>
            <small>{error.confirmPasswordError}</small>
    </div>
            <button className='btn btn-dark w-50 mt-3' onClick={handleUpdate} >Update</button>
    </div>
  )
}

export default Passwordmodal