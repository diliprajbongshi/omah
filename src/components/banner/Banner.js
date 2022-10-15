import React from 'react'
import "./banner.css"

const Banner = () => {
  return (
    <div className='banner'>
      <div className='container'>
         <div className='banner_part'>
           <div className='banner_text'>
            <h1>Temukan Hunian Keluarga Sesuai Keinginanmu</h1>
            <p>Menyediakan hunian bagi keluarga anda dengan varian pilihan dan lokasi yang strategis di kota anda dengan cara yang lebih mudah.</p>
            <div className='banner_button'><i class="fa-solid fa-location-dot"></i>
              <input type="search" placeholder='Search location, properties, residental group' />
              <button>Search</button>
             </div>
            <div className='banne_last'>
              <div className='banner_count_first'>
                <h3>200<i class="fa-solid fa-plus"></i></h3>
                <p>Residental grup<br/> telah bergabung</p>
              </div>
              <div className='banner_count_first'>
                <h3>10<i class="fa-solid fa-plus"></i></h3>
                <p>Sudah<br /> berpengalaman </p>
              </div>
              <div className='banner_count_first'>
                <h3>999<i class="fa-solid fa-plus"></i></h3>
                <p>Properti tersedia<br />di berbagai Kota</p>
              </div>
            </div>
          </div>
           <div className='banner_image'>
            <img src='images/banner.png'   />
           </div>
         </div>
      </div>
    </div>
  )
}

export default Banner