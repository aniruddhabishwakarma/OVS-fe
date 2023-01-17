import React, { useState } from 'react';
import './contactmodal.css'

const Contactmodal =  ({visibility,hide,adminInfo}) => {
    const [contact,setContact] = useState("");
    const [error,setError] = useState("");
    const adminInfoObject = {...adminInfo[0]};
    const validate = (e) => {
        if(contact.toString().length !== 10){
            setError("Not valid");
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
                contact: contact,
                email: adminInfoObject.email
               })
          };
          const response = await fetch('http://localhost:5000/admin/4', requestOptions);
          console.log(response);
          const data = await response.json();
          setContact("");
          alert('Update Succesful');
          }catch(err){
            console.log(err.message);
          }
          
    }
    if(!visibility) return null;
  return (
    <div className="contact-modal">
    <button className='contact-btn' onClick={hide}>x</button>
    <h3 className='update-contact mb-5'>Update Contact</h3>
    <div class="form-floating mb-3 w-75">
            <input type="text" className="form-control" value={contact} placeholder="Contact" onChange={(e)=>setContact(e.target.value)} />
            <label htmlFor="contact">Contact</label>
            <small>{error}</small>
            </div>
            <button className='btn btn-dark w-50 mt-3' onClick={handleUpdate}>Update</button>
    </div>
  )
}

export default Contactmodal;