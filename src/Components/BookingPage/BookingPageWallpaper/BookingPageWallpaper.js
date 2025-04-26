import React from 'react'
import './BookingPageWallpaper.css'
import BookingPageWallpaperImage from '../../../Assets/wallpaper4.png'
import RoomsList from '../RoomsList/RoomsList'
import Faqs from '../FAQs/Faqs'

function BookingPageWallpaper() {
  return (
    <div>    
      <div className="wallpaper-container">
        <div className="image-wrapper">
          <img 
            src={BookingPageWallpaperImage} 
            alt='Zen Villa Rooms' 
            className='wallpaper-image'
          />
          <h1 className='wallpaper-title'>
            Experience the Serenity of Our Zen Villa Rooms
          </h1>
        </div>
      </div>
      <RoomsList/>
      <Faqs/>
    </div>
  )
}

export default BookingPageWallpaper