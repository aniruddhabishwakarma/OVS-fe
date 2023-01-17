import React, { useState } from 'react';
import './emailmodal.css';

const Emailmodal = ({visibility,hide,adminInfo}) => {
    const[email,setEmail]= useState("");
    const[error,setError] = useState("");
    const adminInfoObject = {...adminInfo[0]};

    function isValidEmail(email) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email); 
    }
    const handleChange = (e) => {
        setEmail(e.target.value);
       
    }
    const validate = (e) => {
        if (!isValidEmail(email)) {
            setError('Email is invalid');
            setEmail("");
            e.preventDefault();
        }
    }
    const handleUpdate = async () => {
        try{
            validate();
            const requestOptions = {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ 
                username : adminInfoObject.username,
                contact: adminInfoObject.contact,
                email: email
               })
          };
          const response = await fetch('http://localhost:5000/admin/4', requestOptions);
          console.log(response);
          const data = await response.json();
          setEmail("");
          alert('Update Succesful');
          }catch(err){
            console.log(err.message);
          }
          
    }
    if(!visibility) return null;
  return (
    <div className="email-modal">
    <button className='email-btn' onClick={hide}>x</button>
    <h3 className='update-email mb-5'>Update Email</h3>
    <div class="form-floating mb-3 w-75">
            <input type="text" className="form-control" value={email} placeholder="Contact" onChange={handleChange} />
            <label htmlFor="email">Email</label>
            <small>{error}</small>
            </div>
            <button className='btn btn-dark w-50 mt-3' onClick={handleUpdate}>Update</button>
    </div>
  )
  }

export default Emailmodal;