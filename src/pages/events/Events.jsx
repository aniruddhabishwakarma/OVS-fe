import React,{useState} from 'react';
import AddEvent from './AddEvent';
import './events.css'

const Events = () => {
  const [modal,setModal] = useState(false);
  const showModal = () =>{
    setModal(!modal);
  }
 
  return (
    <>
    <AddEvent visibility={modal}
    hide={()=>setModal(false)}
    />
   <div className='nav'>
      <h1>Events</h1>
      <button className="btn btn-secondary add" onClick={showModal}>Add Event</button>
   </div>
   <div className="buttons"> 
      <button>Ongoing</button>
      <button>Upcoming</button>
      <button>Expired</button>
   </div>
   <div class="events">
   <div className="event"></div>
   <div className="event"></div>
   <div className="event"></div>
   <div className="event"></div>
   <div className="event"></div>
   </div>
    </>
  )
}

export default Events