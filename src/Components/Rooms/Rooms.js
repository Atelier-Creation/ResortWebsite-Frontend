import React from 'react';
import './Rooms.css';
import room1 from '../../Assets/bedRoom.png';
import room2 from '../../Assets/bedRoom4.png';
import { useNavigate } from 'react-router-dom';
const roomData = [
  {
    id: 1,
    image: room1,
    title: 'Luxury Cottage Room',
    description: 'Our spacious suites embody luxury and sophistication and enjoy the experience with a spacious sitting area, luxury bedding and free WiFi.',
  },
  {
    id: 2,
    image: room2,
    title: 'Heritage Cottage Room',
    description: 'Our spacious suites embody luxury and sophistication and enjoy the experience with a spacious sitting area, luxury bedding and free WiFi.',
  },
];

function Rooms() {
  const navigate = useNavigate();
  return (
    <div className="ourRoomsContainer">
      <div className="sectionHeader">
        <h2 className="sectionLabel">OUR ROOMS</h2>
        <h1 className="sectionTitle">Exquisite Cottage <br /> Accommodations</h1>
      </div>
      <div className="roomsGrid">
        {roomData.map((room) => (
          <div key={room.id} className="roomCard">
            <img src={room.image} alt={room.title} className="roomImage" />
            <div className="roomOverlay">
              <h3>{room.title}</h3>
              <p>{room.description}</p>
              <div className="roomButtons">
                <button className="viewBtn">View More</button>
                <button className="bookBtn" onClick={()=>navigate("/bookRooms")}>Book Room</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rooms;
