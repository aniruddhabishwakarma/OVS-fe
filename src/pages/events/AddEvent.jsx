import axios from 'axios';
import React, { useState } from 'react';
import './addevent.css'

const AddEvent = ({visibility,hide}) => {
    
    const [eventName,setEventName] = useState('');
    const [startDate,setStartDate] = useState('');
    const [endDate,setEndDate] = useState('');
    const [eventDescription,setEventDescription] = useState('');
    const [banner,setBanner] = useState('');
    const [images,setImages] = useState([]);
    const [position,setPosition] = useState({position:''});
    const[positions,setPositions] = useState([]);
    

    // const handleInputChange = (e,index) =>{
    //     const {name,value} = e.target;
    //     console.log(name,value  )
    //     const list = [...positions];
    //     list[index][name] = value;
    //     setPositions(list);
    // }
    const removeField =(index) =>{
        const list = [...positions];
        list.splice(index,1);
        setPositions(list);
    }
    
    const appendEventFormData=()=>{
        const photos =images ? [...images] : [];
        let data = new FormData();
        data.append("eName",eventName)
        data.append("sDate",startDate)
        data.append("eDate",endDate)
        data.append("eDescription",eventDescription)
        data.append("banner",banner)
        
        photos.forEach((photo,i)=>{
        data.append(`photo-${i}`,photo,photo.name)

    })

        positions.forEach((post,i)=>{
            data.append(`position${i+1}`,post.position)
        })

        return data;
    }

    const submitForm = async (e) => {
        e.preventDefault();
       const formData = appendEventFormData();
       console.log(...formData);
        try{
            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }
            const url = 'http://localhost:5000/events';
            axios.post(url, formData,config).then((response)=>{
                console.log(response)
            })

        //     await fetch('http://localhost:5000/events', {
        //     method: 'POST',
        //     headers: {
        //         'Content-type': 'multipart/form-data'
        //       },
        //     body: data,
        // }).then(function(response) {
        //     console.log(response.json());
        //     return response.json();
            
        // });
        }catch(err){
            console.log(err);
        }
    }


    if(!visibility) return <></>;

  return (
    <div className='overlay'>
        <button className='close-btn' onClick={hide}>X</button>
        <div className='add-event'>
            <h3 className='mb-3'>Add Event</h3>
            <div class="form-floating mb-3 w-100">
            <input type="text" className="form-control" value={eventName} placeholder="Event Name" onChange={(e)=>setEventName(e.target.value)} />
            <label htmlFor="event-name">Event Name</label>
            </div>
            <div class="row w-100 mb-4">
                <div class="col">
                <label htmlFor="starting-date">Starting Date</label>
                <input type="date" className="form-control" placeholder="Start Date" value={startDate} onChange={(e)=>setStartDate(e.target.value)}/>
                </div>
                <div class="col">
                <label htmlFor="starting-date">Ending Date</label>
                <input type="date" className="form-control" placeholder="End Date" value={endDate}
                onChange={(e)=>setEndDate(e.target.value)} />
                </div>
            </div>
            <div className="form-floating w-100 mb-3">
                <textarea className="form-control" placeholder="Leave a comment here" value={eventDescription}
                onChange={(e)=>setEventDescription(e.target.value)}></textarea>
                <label htmlFor="floatingTextarea">Event Description</label>
            </div>
            <div class="mb-3 w-100">
                <label htmlFor="formFile" className="form-label">Banner</label>
                <input className="form-control" type="file" 
                accept="image/jpg,image/jpeg,image/png,image/svg"  onChange={(e)=>setBanner(e.target.files[0])}/>
            </div>
            <div class="mb-3 w-100">
                <label htmlFor="photos" className="form-label">Images</label>
                <input multiple className="form-control" type="file" 
                 onChange={(e)=>{setImages(e.target.files)}} 
                accept="image/jpg,image/jpeg,image/png/image.svg"/>
            </div>
           <div>
           <input type="text" value={position.position} className="form-control w-75 mb-3" placeholder='Positions' onChange={(e)=>setPosition({position:e.target.value})} />  
            <button className='btn btn-primary w-25 mb-4' onClick={()=>{
                setPositions([...positions,position])
                setPosition({position:''})
            }}>Add</button>

           </div>
            {positions.map((item,index)=>{
                return <>
                <p key={index}>{item.position}</p>
                <button className='' onClick={()=>removeField(index)}>X</button>
                </>
            })}

            {/* {
                position.map((x,i)=>{
                    return <div class="form-floating mb-2 w-100 position">
                    <input type="text" className="form-control w-75 mb-3" placeholder='Positions' onChange={e=>handleInputChange(e,i)} />  
                    <label htmlFor="position">Position</label>
                    {
                        position.length!==1 &&
                        <button className='removeButton' onClick={()=>removeField(i)}>X</button>
                   
                    }   
                    {
                        position.length-1 === i &&
                        <button className='btn btn-primary add-position w-25 mb-4' onClick={addField}>Add</button>
                    }    
                    
                    </div>
                }) 
            } */}
            <button className='btn btn-primary mt-2 w-75' onClick={submitForm}>Submit</button>
     </div>
 </div>
  )
}

export default AddEvent