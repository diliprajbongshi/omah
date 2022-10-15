import React from 'react'
import "./service.css"

const Service = () => {
  return (
    <div className='service'>
        <div className='container'>
            <div className='service_part'>
                <div className='service_one'>
                      <h3>Hubungi Kami</h3>
                    <div className='ser_bnt ser_bbbb' >
                           <div className='service_button'>
                              <div className='service_btn'>
                                  <div className='service_btn_one'>
                                      <i className="fa-solid fa-phone"></i>
                                  </div>
                                  <div className='service_btn_one two'>
                                      <p>Call</p>
                                      <h5>+6281232936733</h5>
                                  </div>
                              </div>
                            <a href=''>Call now</a>
                           </div>
                           <div className='service_button'>
                              <div className='service_btn'>
                                  <div className='service_btn_one'>
                                      <i className="fa-solid fa-envelope"></i>
                                  </div>
                                  <div className='service_btn_one two'>
                                      <p>Email</p>
                                      <h5>omahindev@gmail.com</h5>
                                  </div>
                              </div>
                            <a href=''>Enroll now</a>
                           </div>
                      
                    </div>
                </div>
                <div className='service_two'>
                      <h3>Penghargaan</h3>
                      <div className='ser_img'>
                          <img className='img_one' src='images/ser.png' />
                          <img src='images/ser_two.png' />
                      </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Service