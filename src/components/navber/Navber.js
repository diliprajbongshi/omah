import React from 'react'
import "./navber.css";

const Navber = () => {
  return (
    <nav>
        <div className='container'>
           <div className='box'>
              <div className='logo'>
                <img src="images/logo.png" />
              </div>
              <div className='navitem'>
                 <ul>
                   <li><a href=''>Home</a></li>
                   <li><a href=''>About </a></li>
                   <li><a href=''>Properties<i className="fa-solid fa-angle-down"></i></a></li>
                   <li><a href=''>Contact</a></li>
                 </ul>
              </div>
              </div>
        </div>
    </nav>
  )
}

export default Navber