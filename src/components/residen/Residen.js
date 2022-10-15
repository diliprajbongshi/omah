import React from 'react'
import "./residen.css"

const Residen = () => {
  return (
    <div className='residen'>
        <div className='container'>
              <div className='residen_part'>
                 <div className='residen_one'>
                      <p>Pilihan konsumen</p>
                      <h3>Residen Favorit</h3>
                      <div className='residen_img'>
                          <img src='images/resi.png' />
                      </div>
                     <div className='resi_image_two'>
                          <img src='images/home.png' />
                     </div>
                 </div>
                 <div className='residen_two'>
                      <h3>Bangunan yang dirancang<br/> oleh Aristektur Handal</h3>
                      <p>Tanpa diragukan, properti yang disediakan dalam webiste kami merupakan hasil kerjasama secara profesional dengan para Arsitektur ternama dan Developer yang terpercaya.</p>
                    <div className='residen_button'>
                    <div className='btn_one one'>
                        <i class="fa-solid fa-phone"></i>  <a href='#'>Hubungi Kami</a>
                      </div>
                      <div className='btn_one'>
                        <i class="fa-solid fa-phone"></i>  <a href='#'>Hubungi Kami</a>
                      </div>
                    </div>
                  
                 </div>
                
              </div>
        </div>
    </div>
  )
}

export default Residen