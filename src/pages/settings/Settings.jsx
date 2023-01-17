import React, { useState } from 'react';
import Usernamemodal from './Usernamemodal';
import Contactmodal from './Contactmodal';
import Emailmodal from './Emailmodal';
import Passwordmodal from './Passwordmodal';
import './settings.css'

const Settings = (props) => {
  const [usernameModal,setusernameModal] = useState(false);
  const [contactModal,setContactModal] = useState(false);
  const [emailModal,setEmailModal] = useState(false);
  const [passwordModal,setPasswordModal] = useState(false);
  return (
    <>
    <Usernamemodal visibility={usernameModal}
    hide = {()=>setusernameModal(!usernameModal)}
    adminInfo = {props.adminInfo}/>

    <Contactmodal visibility = {contactModal}
    hide={()=>setContactModal(!contactModal)}
    adminInfo={props.adminInfo}/>

    <Emailmodal visibility = {emailModal}
    hide={()=>setEmailModal(!emailModal)}
    adminInfo={props.adminInfo} />

    <Passwordmodal visibility ={passwordModal}
    hide= {()=>setPasswordModal(!passwordModal)}
    adminInfo={props.adminInfo}
    />

    <section id="settings" className="settings bg-dark text-light">
            <div className="setting-heading bg-dark text-light">
                <h1>General Profile Settings</h1>
            </div>
            <table className="table">
                <tbody>
                {
                  Array.from(props.adminInfo).map((info)=>{
                    return <>
                      <tr>
                    <th scope="row">1</th>
                    <td>Username</td>
                    <td>{info.username}</td>
                    <td><button className='btn btn-dark'onClick={()=>setusernameModal(true)}>Edit</button></td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Contact</td>
                    <td>{info.contact}</td>
                    <td><button className='btn btn-dark' onClick={()=>setContactModal(true)}>Edit</button></td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Email</td>
                    <td>{info.email}</td>
                    <td><button className='btn btn-dark' onClick={()=>setEmailModal(true)}>Edit</button></td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Password</td>
                    <td>**********</td>
                    <td><button className='btn btn-dark' onClick={()=>setPasswordModal(true)}>Edit</button></td>
                  </tr>
                    </>
                  })
                }
                </tbody>
              </table>
       </section>



    </>
  )
}

export default Settings