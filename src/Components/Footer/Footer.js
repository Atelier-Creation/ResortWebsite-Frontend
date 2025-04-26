import React from 'react';
import './Footer.css';
import logo from '../../Assets/logo.png';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-details">
        <div className="footer-column">
          <img src={logo} alt="Hyge Royal Logo"/>
          <h5>We catalyze your luxurious vacation</h5>
        </div>

        <div className="footer-column">
          <h3>Address</h3>
          <p>Dot Cowork - Tidal park</p>
          <p>1st floor D-block, Tharamani</p>
          <p>Chennai-600113</p>
          <p>support@hygeinfotech.com</p>
          <p>Mon-Friday, 8am - 5pm</p>
        </div>

        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="footer-icon">
            <div className="footer-icons"><i className="bi bi-instagram"></i></div>
            <div className="footer-icons"><i className="bi bi-linkedin"></i></div>
            <div className="footer-icons"><i className="bi bi-facebook"></i></div>
            <div className="footer-icons"><i className="bi bi-twitter"></i></div>
            <div className="footer-icons"><i className="bi bi-youtube"></i></div>
          </div>
        </div>
      </div>
      <div className="Footer-text">
        <p>© 2023 Hyge Royal. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;