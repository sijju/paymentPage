import React, { useState } from 'react'
import './Nav.scss'
const Navbar = () => {
  
  const [open,setOpen] = useState(false)
  
  return (
    <div className="navbar">
       

        <div className="left">
            <img src='/LOGO.png' alt="EDYODA" />
          
          <div className="detail">
              <h3>Courses</h3>
              <img src="/Vector.png" alt="arrow" />
          </div>  
          <div className="detail">
              <h3>Programs</h3>
              <img src="/Vector.png" alt="arrow" />
          </div>  
          
        </div>
        <div className="right">
           <div className={`details ${open ?  'open' : ''}`}>
             <img src="/Search.png" alt="arrow" width="20px" height="20px" />
             <h3>Log in</h3>
             <button type="button" className='btn'>Join Now</button>
           </div>
           <button type="button" className="toggle" onClick={()=>setOpen(!open)}>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">
            <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
           </svg>
           </button>
        </div>
      
       
    </div>
  )
}

export default Navbar