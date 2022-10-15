import React from 'react'
import "./slider.css"

const Slider = () => {
  return (
    <div className='slider'>
        <div className='container'>
            <div className='slider_head'>
                  <p>Pilihan Auditor</p>
                  <h3>Residen Berbagai Kota</h3>
            </div>
            <div className='slider_part'>
                 <div className='slider_img_part'>
                    <div className='slider_img_one'>
                        <img src='images/ghor.png' />
                          <h4>Magnolia Surabaya</h4>
                          <p>Jl. Gatot Subroto No.KM.6,8, RT.001/RW.008, Jatake, Kec. Jatiuwung, Kota Tangerang, Banten 15136</p>
                    </div>
                    <div className='slider_img_one'>
                        <img src='images/ghor.png' />
                          <h4>Magnolia Surabaya</h4>
                          <p>Jl. Gatot Subroto No.KM.6,8, RT.001/RW.008, Jatake, Kec. Jatiuwung, Kota Tangerang, Banten 15136</p>
                    </div>
                    <div className='slider_img_one'>
                        <img src='images/ghor.png' />
                          <h4>Magnolia Surabaya</h4>
                          <p>Jl. Gatot Subroto No.KM.6,8, RT.001/RW.008, Jatake, Kec. Jatiuwung, Kota Tangerang, Banten 15136</p>
                    </div>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Slider
