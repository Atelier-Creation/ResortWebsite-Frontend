// PaymentSuccess.js
import React, { useEffect } from 'react';
import './PaymentSuccess.css';
import StepIndicator from '../StepIndicator/StepIndicator';
import Confetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size';  

function PaymentSuccess() {
  const [width, height] = useWindowSize(); 

  return (
    <div className="payment-success-page">
      <StepIndicator currentStep={3} /> 
      <div className="success-content">
        <h2>Payment Successful!</h2>
        <p>Thank you for your booking. A confirmation email has been sent to you.</p>
      </div>
      <Confetti width={width} height={height} /> 
    </div>
  );
}

export default PaymentSuccess;
