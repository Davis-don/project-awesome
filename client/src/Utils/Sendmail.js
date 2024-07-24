import React from 'react'
import './Sendmail.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'

function Sendmail() {
 const [contactData,setContactData]=useState({
    fullNames:"",
    contact:"",
    email:"",
    message:""
 })
    const handlesubmit=(e)=>{
setContactData({
    ...contactData,[e.target.name]:e.target.value
});
console.log(contactData);
    }
    const handlePost=async (e)=>{
        e.preventDefault();
    try{
    let response=await fetch ('http://localhost:4000/',{
        method:'post',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(contactData)
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    alert('success');
    // Further actions with data if needed
    }
    catch (error){
    console.log(error)
    }
    }
  return (
    <div className='sendmail-overall-container'>
        <div className='sendmail-contact-form-holder'>
            <h2 style={{textAlign:'center'}}>Fill form below</h2>
            <form className='actual-contact-form'onSubmit={handlePost}>
                <label>Full Names</label>
                 <input onChange={handlesubmit} name='fullNames' type='text' placeholder='Name'className='form-control'/>
                 <label>Contact</label>
                 <input onChange={handlesubmit} name='contact' type='number' placeholder='Name'className='form-control'/>
                 <label>Email</label>
                 <input onChange={handlesubmit} name='email' type='email' placeholder='Name'className='form-control'/>
                 <label>Message</label>
                 <textarea onChange={handlesubmit} name='message' placeholder='message...'className='form-control'/>
                 <button  className='form-control m-1' type='submit'>Submit</button>
                </form>
        </div>
        </div>
  )
}

export default Sendmail