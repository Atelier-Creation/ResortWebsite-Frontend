import React from 'react';
import './PaymentPage.css';
import { useLocation, useNavigate } from 'react-router-dom';

function PaymentPage({ onPay }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { resort, roomCount } = location.state || {};

  const priceString = resort?.price || 'Rs 3,000.00';
  const priceNumber = parseFloat(priceString.replace(/[^0-9.-]+/g, ''));
  const subtotal = priceNumber * (roomCount || 1);
  const taxesAndFees = subtotal * 0.2;
  const totalPay = subtotal + taxesAndFees;

  const handlePayClick = () => {
    setTimeout(() => {
      onPay(); 
    }, 1000);
  };

  return (
    <div className="payment-page">
      <div className="payment-summary-box">
        <h4>Payment Summary</h4>
        <div className="summary-line">
          <span>Subtotal</span><span>Rs {subtotal.toFixed(2)}</span>
        </div>
        <div className="summary-line">
          <span>Taxes & Fees</span><span>Rs {taxesAndFees.toFixed(2)}</span>
        </div>
        <hr className="summary-divider" />
        <div className="summary-line total">
          <span>Total Pay</span><span>Rs {totalPay.toFixed(2)}</span>
        </div>
        <p className="tax-info">(Incl. of all taxes)</p>
        <button className="pay-button" onClick={handlePayClick}>Pay</button>
      </div>
    </div>
  );
}

export default PaymentPage;