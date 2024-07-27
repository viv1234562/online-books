
import React, { useState, useEffect } from 'react';
import './CheckoutForm.css'; 

const CheckoutForm = ({ cart }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [payment, setPayment] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const calculateTotalPrice = () => {
      return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };
    setTotalPrice(calculateTotalPrice());
  }, [cart]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert('Checkout successfull');
    alert('Order successfull🙂🙋‍♂️');
  };

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      <div className="form-group">
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Address</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Payment Information</label>
        <div className="payment-options">
          <label>
            <input
              type="radio"
              name="payment-method"
              value="phone"
              checked={payment === 'phone'}
              onChange={(e) => setPayment(e.target.value)}
            />
            <i className="fas fa-mobile-alt"></i> Phone
          </label>
          <label>
            <input
              type="radio"
              name="payment-method"
              value="gpay"
              checked={payment === 'gpay'}
              onChange={(e) => setPayment(e.target.value)}
            />
            <i className="fab fa-google-pay"></i> Google Pay
          </label>
          <label>
            <input
              type="radio"
              name="payment-method"
              value="cod"
              checked={payment === 'cod'}
              onChange={(e) => setPayment(e.target.value)}
            />
            <i className="fas fa-cash-register"></i> Cash on Delivery
          </label>
          <label>
            <input
              type="radio"
              name="payment-method"
              value="card"
              checked={payment === 'card'}
              onChange={(e) => setPayment(e.target.value)}
            />
            <i className="fas fa-credit-card"></i> Credit/Debit Card
          </label>
        </div>
      </div>
      <div className="total-price">
        <strong>Total Price:</strong> ${totalPrice.toFixed(2)}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CheckoutForm;








