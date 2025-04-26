import React from 'react';
import { useLocation } from 'react-router-dom';
import './RoomSummary.css';
import { FaUserFriends, FaBed, FaWifi } from 'react-icons/fa';

function RoomSummary() {
  const location = useLocation();
  const { resort, roomCount } = location.state || {};

  if (!resort) {
    return <div>No room data available.</div>;
  }

  return (
    <div className="room-summary-container">
      <h4 style={{fontSize:"25px"}}>Room Summary</h4>
      <div className="room-summary-box">
        <div className="room-date">
          <span>Aug 2, 2023 - Aug 4, 2023</span>
          <span>1 Night</span>
        </div>
        <div className="room-title">
          <span>{resort.name} * {roomCount}</span>
          <a href="/">Change</a>
        </div>
        <hr style={{margin: "20px 0"}} />
        <div className="room-details">
          <img src={resort.images[0]} alt={resort.name} />
          <ul>
            <li>
              <FaUserFriends /> {resort.accomdation}
            </li>
            <li>
              <FaBed /> {resort.bed}
            </li>
            <li>
              <FaWifi /> {resort.wifi}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RoomSummary;