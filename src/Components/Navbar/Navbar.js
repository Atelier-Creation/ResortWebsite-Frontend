import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../../Assets/logo.png';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className={`Navbar ${isHomePage ? 'transparent-navbar' : 'sticky-navbar'}`}>
      {/* Mobile: Logo + Button + Menu Icon container */}
      <div className="mobile-nav-container">
        <img src={logo} alt='logo' onClick={() => navigate("/")} className='logo-image' />
        
        {/* Desktop Navigation (hidden on mobile) */}
        <div className='nav-links'>
          <a href="#about-us">About Us</a>
          <a href="#contact-us">Contact Us</a>
          <a href="#rooms">Booking</a>
          <a href="#amenities">Amenities</a>
          <a href="#map">Location</a>
        </div>
        
        {/* Book Room Button */}
        <div className="bookRoom-container">
          <button className='bookRoom' onClick={() => navigate("/bookRooms")}>Book Room</button>
        </div>
        
        {/* Mobile Menu Icon */}
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          <FiMenu />
        </div>
      </div>
      
      {/* Mobile Menu Dropdown */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <a href="#about-us" onClick={toggleMobileMenu}>About Us</a>
        <a href="#contact-us" onClick={toggleMobileMenu}>Contact Us</a>
        <a href="#rooms" onClick={toggleMobileMenu}>Booking</a>
        <a href="#amenities" onClick={toggleMobileMenu}>Amenities</a>
        <a href="#map" onClick={toggleMobileMenu}>Location</a>
      </div>
    </div>
  );
}

export default Navbar;