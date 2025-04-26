import React from 'react';
import './StepIndicator.css';

function StepIndicator({ currentStep }) {
  return (
    <div className="step-wrapper">
      <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>1</div>
      <div className={`line ${currentStep >= 2 ? 'active' : ''}`}></div>
      <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>2</div>
      <div className={`line ${currentStep >= 3 ? 'active' : ''}`}></div>
      <div className={`step ${currentStep >= 3 ? 'active' : ''}`}>3</div>
    </div>
  );
}

export default StepIndicator;
