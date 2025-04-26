import React from 'react';
import './BookingForm.css';

function BookingForm({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(); 
  };

  return (
    <>
      <h4 className="booking-form-title">Booking Form</h4>
      <div className="form-box">
        <h3 style={{fontSize:"20px"}}>Let Us Know Who You Are</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" required />
          <input type="tel" placeholder="+91 Mobile Number" required />
          <input type="email" placeholder="Email ID" required />
          <input type="text" placeholder="Address" required />
          <textarea placeholder="Special Request" rows="4" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default BookingForm;