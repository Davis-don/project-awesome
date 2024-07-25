import React from 'react'
import './Reademail.css'
import { CgMail } from "react-icons/cg";
import { useState } from 'react';
import Post from './Post';
function Reademail() {
const [messageTop,setMessageTop]=useState(true);
const [messagebottom,setMessagebottom]=useState (false)
  return (
    <div className='readEmail-view-overall-container'>
        <div className='emailing-header'>
        <button type="button" class="btn btn-primary">
    Inbox <span class="badge bg-danger">4</span>
  </button>
        </div>
        <div className='post-container'>
        <Post/>
        </div>
        
        {/* <div className='actual-text-component'>
        {messageTop && <div onClick={()=>{setMessageTop(false);setMessagebottom(true)}} className='display-link-text'>
            <h5><span><CgMail /></span>Davis Ikou</h5>
          </div>}
    { messagebottom && <div className='display-message-section'>
    heloooooo mr I need this and this
    </div>}
          
        </div> */}

        </div>
  )
}

export default Reademail