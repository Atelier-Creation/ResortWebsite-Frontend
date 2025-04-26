import React from 'react';
import './CheckAvailable.css';
import { FaHotel, FaCalendarCheck, FaCalendarTimes, FaUsers } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
function CheckAvailable() {
  const navigate = useNavigate()
  return (
    <div className="checkAvailable">
      {/* Resort - always visible */}
      <div>
        <label className="labelWithIcon-for-resort">
          <FaHotel className="icon" />
          <span>Resort</span>
        </label>
        <select className="inputField">
          <option value="">Select a resort</option>
          <option value="Blue Lagoon">Blue Lagoon</option>
          <option value="Mountain View">Mountain View</option>
          <option value="Palm Retreat">Palm Retreat</option>
          <option value="Ocean Breeze">Ocean Breeze</option>
        </select>
      </div>

      {/* Mobile date row - only visible on mobile */}
      <div className="mobile-only mobile-date-row">
        <div className="mobile-date-column">
          <label className="labelWithIcon">
            <FaCalendarCheck className="icon" />
            <span>Check In</span>
          </label>
          <input type="date" className="inputField-check-in"/>
        </div>
        <div className="mobile-date-column">
          <label className="labelWithIcon">
            <FaCalendarTimes className="icon" />
            <span>Check Out</span>
          </label>
          <input type="date" className="inputField-check-out" />
        </div>
      </div>

      {/* Desktop date inputs - only visible on desktop */}
      <hr className="desktop-only" />
      <div className="desktop-only">
        <label className="labelWithIcon">
          <FaCalendarCheck className="icon" />
          <span>Check In</span>
        </label>
        <input type="date" className="inputField-check-in"/>
      </div>
      <hr className="desktop-only" />
      <div className="desktop-only">
        <label className="labelWithIcon">
          <FaCalendarTimes className="icon" />
          <span>Check Out</span>
        </label>
        <input type="date" className="inputField-check-out" />
      </div>

      {/* Rooms for guests - always visible */}
      <hr className="desktop-only" />
      <div>
        <label className="labelWithIcon">
          <FaUsers className="icon" />
          <span>Rooms for</span>
        </label>
        <input type="number" placeholder="Guests" className="inputField-rooms-for" />
      </div>

      {/* Button - always visible */}
      <div>
        <button className="checkButton" onClick={()=>navigate('/bookRooms')}>Check Availability</button>
      </div>
    </div>
  );
}

export default CheckAvailable;