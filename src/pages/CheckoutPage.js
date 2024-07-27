
import React from 'react';
import CheckoutForm from '../components/CheckoutForm';

const CheckoutPage = ({ cart }) => {
  return (
    <div>
      <CheckoutForm cart={cart} />
    </div>
  );
};

export default CheckoutPage;






