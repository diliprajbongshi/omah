import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
      <div className='footer'>
        <div className='container'>
              <div className='footer_part'>
                  <div className='fooler_lofo'>
                      <img src='images/footer.png'/>
                  </div>
                  <div className='fooler_icon'>
                     <ul>
                          <li> <a href='#'><i class="fa-brands fa-facebook-f"></i></a></li>
                          <li> <a href='#'><i class="fa-brands fa-youtube"></i></a></li>
                          <li> <a href='#'><i class="fa-brands fa-linkedin-in"></i></a></li>
                          <li> <a href='#'><i class="fa-brands fa-facebook-f"></i></a></li>
                     </ul>
                      
                  </div>
              </div>
        </div>
      </div>
  )
}

export default Footer