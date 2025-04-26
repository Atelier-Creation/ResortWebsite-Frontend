import React, { useState } from 'react';
import './BookingSummary.css';
import StepIndicator from '../StepIndicator/StepIndicator';
import BookingForm from '../BookingForm/BookingForm';
import PaymentPage from '../PaymentPage/PaymentPage';
import RoomSummary from '../RoomSummary/RoomSummary';
import { useNavigate } from 'react-router-dom';

function BookingSummary() {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();
  const [isMobile] = useState(window.innerWidth <= 768);

  const handleFormSubmit = () => {
    setCurrentStep(2);
  };

  const handlePayment = () => {
    setCurrentStep(3);
    setTimeout(() => {
      navigate('/payment-success'); 
    }, 1000);  
  };

  return (
    <div className="booking-page">
      <div style={{backgroundColor: "white"}}>
        <StepIndicator currentStep={currentStep} />
      </div>
      <div className="booking-content">
        {/* For mobile, we conditionally render PaymentPage in the left section when step is 2 */}
        {isMobile && currentStep === 2 ? (
          <>
            <div className="right-section">
              <RoomSummary />
            </div>
            <div className="left-section">
              <PaymentPage onPay={handlePayment} />
            </div>
          </>
        ) : (
          <>
            <div className="left-section">
              {currentStep === 1 && <BookingForm onSubmit={handleFormSubmit} />}
              {currentStep === 3 && (
                <div className="thank-you-message" style={{ padding: '30px', textAlign: 'center' }}>
                  <h2>🎉 Booking Confirmed!</h2>
                  <p>Thanks for booking with us. We'll see you soon!</p>
                </div>
              )}
            </div>
            <div className="right-section">
              <RoomSummary />
              {!isMobile && currentStep === 2 && <PaymentPage onPay={handlePayment} />}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default BookingSummary;