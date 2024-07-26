import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Reademail.css';
import Post from './Post';

function Reademail() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [messageTop, setMessageTop] = useState(true);
  const [messageBottom, setMessageBottom] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000'); // Adjust the endpoint as needed
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='readEmail-view-overall-container'>
      <div className='emailing-header'>
        <button type="button" className="btn btn-primary">
          Inbox <span className="badge bg-danger">4</span>
        </button>
      </div>
      <div className='post-container'>
        <h1>Posts</h1>
        {posts.length > 0 ? (
          posts.map(post => (
            <Post
              key={post.ID} // Ensure each Post has a unique key
              name={post.fullnames}
              contact={post.contact}
              email={post.email}
              message={post.message}
            />
          ))
        ) : (
          <p>No posts available</p>
        )}
      </div>
    </div>
  );
}

export default Reademail;








// import React from 'react'
// import axios from 'axios';
// import './Reademail.css'
// import { CgMail } from "react-icons/cg";
// import { useState, useEffect } from 'react';
// import Post from './Post';
// function Reademail() {
// const [Loading,setLoading]=useState(true)
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:4000');
//         // Assuming the API returns an object with user data
//         //setUserCredentials(response.data);
//         setLoading(false)
//         console.log(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setLoading(false);
//       }
//     };
  
//     fetchData();
//   }, []);







// const [messageTop,setMessageTop]=useState(true);
// const [messagebottom,setMessagebottom]=useState (false)
//   return (
//     <div className='readEmail-view-overall-container'>
//         <div className='emailing-header'>
//         <button type="button" class="btn btn-primary">
//     Inbox <span class="badge bg-danger">4</span>
//   </button>
//         </div>
//         <div className='post-container'>
//         <div>
//       <h1>Posts</h1>
//       <Post 
//         name="John Doe" 
//         contact="+254712345678" 
//         email="john.doe@example.com" 
//         message="This is a test message."
//       />
     
//         </div>
        

//         </div>
      
//   )
// }

// export default Reademail