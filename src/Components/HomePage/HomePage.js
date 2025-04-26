import React from 'react';
import './HomePage.css';
import wallpaper from '../../Assets/wallpaper.png';
import Headings from '../Headings/Headings';
import CheckAvailable from '../CheckAvailable/CheckAvailable';
import About from '../About/About';
import Rooms from '../Rooms/Rooms';
import Amenities from '../Amenities/Amenities';
import Testimonial from '../Testimonial/Testimonial';
import Galary from '../Galary/Galary';
import Map from '../Map/Map';
import ContactUs from '../ContactUs/ContactUs';

function HomePage() {
  return (
    <div>
      <img src={wallpaper} alt='' className='wallpaper'/>
      <div className='content'>
        <Headings />
      </div>
      <div className='available'>
        <CheckAvailable/>
      </div>
      <div id="about-us">
        <About/>
      </div>
      <div id="rooms">
        <Rooms/>
      </div>
      <div id="amenities">
        <Amenities/>
      </div>
      <div id="testimonial">
        <Testimonial/>
      </div>
      <div id="gallery">
        <Galary/>
      </div>
      <div id="map">
        <Map/>
      </div>
      <div id="contact-us">
        <ContactUs/>
      </div>
    </div>
  );
}

export default HomePage;
