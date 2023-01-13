import React from 'react';
import './dashboard.css';
import RecentAdded from './RecentAdded';

const Dashboard = () => {
  
  const green = {
    color: 'green',
  }
  const red = {
    color : 'red'
  }
  const orange = {
    color : 'orange'
  }
  return (
    <>
    <div class="name">
      <h3>Online Voting System</h3>
      </div>
      <div className="event-display">
        <div className='ongoing'>
          <h1>10</h1>
          <h5 style={green}>Ongoing Event</h5>
        </div>
        <div className="upcoming">
          <h1>5</h1>
          <h5 style={orange}>Upcoming Event</h5>
        </div>
        <div className="expired">
          <h1>20</h1>
          <h5 style = {red}>Expired Event</h5>
        </div>

      </div>
      
        <RecentAdded/>

      
    </>
    
  )
}

export default Dashboard