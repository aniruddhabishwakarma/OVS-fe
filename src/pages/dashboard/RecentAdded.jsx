import React from 'react';
import './recentadded.css';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

const RecentAdded = () => {
   const image = "https://deviniti.com/app/uploads/2021/10/09-20_DM-8186_EVENTS_01_MAIN-2-1024x682.png";
   
   const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 300
    
   }
   const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 300;
   }
  return (
   <>
   <div className="recent">
    <h3>Recently Added Events</h3>
    <button className="left-scroll" onClick={slideLeft}> <BiChevronLeft size={50}/> </button>
    <button className="right-scroll" onClick={slideRight}><BiChevronRight size={50}/> </button>
    <div class="recent-events" id="slider">
    <div class="recent-event">
        <img src={image} alt="fuck"></img>
        <h4>Miss Rai</h4>

    </div>
    <div class="recent-event">
        <img src={image} alt="fuck"></img>
        <h4>Miss Rai</h4>
    </div>
    <div class="recent-event">
        <img src={image} alt="fuck"></img>
        <h4>Miss Rai</h4>
    </div>
    <div class="recent-event">
        <img src={image} alt="fuck"></img>
        <h4>Miss Rai</h4>
    </div>
    <div class="recent-event">
        <img src={image} alt="fuck"></img>
        <h4>Miss Rai</h4>
    </div>
    <div class="recent-event">
        <img src={image} alt="fuck"></img>
        <h4>Miss Rai</h4>
    </div>
   </div>
   </div>
   
   </>
  )
}

export default RecentAdded