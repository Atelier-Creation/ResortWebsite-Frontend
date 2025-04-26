import React from 'react';
import './Amenities.css';
import { Wifi, BedDouble, ParkingCircle, Snowflake } from 'lucide-react';

const amenities = [
    { icon: <Wifi size={32} className="icon" />, label: "Free Wifi" },
    { icon: <BedDouble size={32} className="icon" />, label: "Fine Furnishing" },
    { icon: <ParkingCircle size={32} className="icon" />, label: "Private Parking" },
    { icon: <Snowflake size={32} className="icon" />, label: "Air Conditioning" },
];

function Amenities() {
  return (
    <div className='Amenities'>
        <div className="Amenities-left-side">
            <h2 className="amenities-label">Amenities</h2>
            <h1 className="amenities-title">Your All-Inclusive Experience</h1>
            <p className="amenities-description">Indulge in a world of luxury and comfort with our exclusive resort amenities, designed to create unforgettable experiences for you.</p>
        </div>
        <div className='Amenities-right-side'>
            {amenities.map((item,index) => (
                <div key={index} className='amenity-logo'>
                    {item.icon}
                    <p className="amenity-label">{item.label}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Amenities;