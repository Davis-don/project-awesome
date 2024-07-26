import React from 'react'
import './Sendmail.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'

function Sendmail() {
    const [successful, Setsuccess]=useState(false);
    const [form,setForm]=useState(true)
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
        const response= await fetch ('project-awesome-server.vercel.app',{
        method:'post',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(contactData)
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    Setsuccess(true);
    setForm(false);

    setTimeout(() => {
        Setsuccess(false);
        setForm(true);  
    }, 2000);
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
            {successful && <div class="alert alert-success">
  <strong>Success!</strong> message sent
</div>}
            {form && <form className='actual-contact-form'onSubmit={handlePost}>
     
                <label>Full Names</label>
                 <input required onChange={handlesubmit} name='fullNames' type='text' placeholder='Name'className='form-control'/>
                 <label>Contact</label>
                 <input
    required
    onChange={handlesubmit}
    name='contact'
    type='text'
    placeholder='Enter Kenyan phone number'
    className='form-control'
    pattern="(\+2547[0-9]{8}|\+2541[0-9]{8}|07[0-9]{8}|01[0-9]{8})"
    title="Please enter a valid Kenyan phone number"
/>
 


                 <label>Email</label>
                 <input required onChange={handlesubmit} name='email' type='email' placeholder='Name'className='form-control'/>
                 <label>Message</label>
                 <textarea required onChange={handlesubmit} name='message' placeholder='message...'className='form-control'/>
                 <button  className='form-control m-1' type='submit'>Submit</button>
                </form>}
        </div>
        </div>
  )
}

export default Sendmail