import React from 'react'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
function CheckoutForm({totalPay}) {
    const stripe = useStripe();
    const elements = useElements();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      if (!stripe || !elements) {
        return;
      }
  
      // Create a PaymentIntent on your server and retrieve the client secret
      const response = await fetch('/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: totalPay * 100 }), // amount in cents
      });
  
      const { clientSecret } = await response.json();
  
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });
  
      if (result.error) {
        console.error(result.error.message);
      } else {
        if (result.paymentIntent.status === 'succeeded') {
          // Redirect to payment confirmed page
          window.location.href = '/payment-confirmed';
        }
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
    );
}

export default CheckoutForm
