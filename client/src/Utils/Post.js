import React, { useState } from 'react';
import { CgMail } from 'react-icons/cg';

const Post = ({ name, contact, email, message }) => {
  const [showMessage, setShowMessage] = useState(true);

  return (
    <div className='overall-post-component'>
      {showMessage ? (
        <div 
          onClick={() => setShowMessage(!showMessage)} 
          className='Display-start text-light'
        >
          <span><CgMail className='fs-2 text-dark'/></span>
          <span className='text-dark'>{name}</span>
        </div>
      ) : (
        <div className='Actual-message bg-dark p-4'>
          <p className='text-light'>Name: {name}</p>
          <p className='text-light'>Contact: {contact}</p>
          <p className='text-light'>Email: <small>{email}</small></p>
          <p className='text-light'>{message}</p>
        </div>
      )}
    </div>
  );
};

export default Post;
