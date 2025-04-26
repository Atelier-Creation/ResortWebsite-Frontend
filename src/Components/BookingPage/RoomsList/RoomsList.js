import React, { useState } from 'react';
import './Rooms.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { datalist } from '../../../Assets/bookingPageList';
import Slider from "react-slick";
import { FaCheckCircle, FaUserFriends, FaBed, FaCity } from "react-icons/fa";
import { PiRulerLight } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';

function RoomsList() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  };

  const maxRooms = 10; 
  const [roomCounts, setRoomCounts] = useState(
    datalist.map(() => 1) 
  );

  const handleIncrement = (index) => {
    setRoomCounts(prevCounts =>
      prevCounts.map((count, i) =>
        i === index && count < maxRooms ? count + 1 : count
      )
    );
  };

  const handleDecrement = (index) => {
    setRoomCounts(prevCounts =>
      prevCounts.map((count, i) =>
        i === index && count > 1 ? count - 1 : count
      )
    );
  };

  const navigate = useNavigate();

  return (
    <div className='rooms-list-container'>
      {datalist.map((list, index) => (
        <div className='room-card' key={index}>
          <div className='room-left'>
            <div className='carousel-container'>
              <Slider {...settings}>
                {list.images.map((img, i) => (
                  <div key={i}>
                    <img src={img} alt={`room-${i}`} className='carousel-img' />
                  </div>
                ))}
              </Slider>
              <div className='photo-count'>+{list.images.length} Photos</div>
            </div>
            <div className='room-icons'>
              <p><FaUserFriends /> {list.accomdation}</p>
              <p><PiRulerLight /> {list.size}</p>
              <p><FaBed /> {list.bed}</p>
              <p><FaCity /> {list.view}</p>
            </div>
          </div>
          
          <div className='room-center'>
            <h3 style={{fontSize:"30px"}}>{list.name}</h3>
            <p>{list.quote} <span className='read-more'>Read More</span></p>
            <div className='features'>
              <p><FaCheckCircle className='check-icon' /> {list.wifi}</p>
              <p><FaCheckCircle className='check-icon' /> {list.shower}</p>
              <p><FaCheckCircle className='check-icon' /> {list.Ac}</p>
              <p><FaCheckCircle className='check-icon' /> {list.Parking}</p>
              <p className='view-more'>View More Amenities</p>
            </div>
          </div>
          
          <div className='room-right'>
            <div className='discount-badge'>20% OFF</div>
            <h3 className='price'>Rs 3,000.00</h3>
            <p className='strike'>Rs 3,600.00</p>
            <p>1 Room Per Night</p>
            <p>2 Adults, 0 Children</p>
            <div className='quantity-box'>
              <div className='quantity-controls'>
                <button 
                  onClick={() => handleDecrement(index)} 
                  disabled={roomCounts[index] <= 1}
                >
                  -
                </button>
                <input 
                  type='text' 
                  value={roomCounts[index]} 
                  readOnly 
                  className='quantity-input' 
                />
                <button 
                  onClick={() => handleIncrement(index)} 
                  disabled={roomCounts[index] >= maxRooms}
                >
                  +
                </button>
              </div>
            </div>
            <p className='warning'>
              Only {maxRooms - roomCounts[index]} Rooms Left. Hurry!
            </p>
            <div>
              <button 
                className='book-btn' 
                onClick={() => navigate('/payment', {
                  state: {
                    resort: list,
                    roomCount: roomCounts[index],
                  },
                })}
              >
                Book
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RoomsList;