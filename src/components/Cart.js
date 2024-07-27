
import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'; 

const Cart = ({ cart, updateQuantity, removeFromCart }) => (
  <div className="cart-container">
    <div className="cart-box">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.coverImage} alt={item.title} />
            <div>
              <h3>{item.title}</h3>
              <p>{item.authors.join(', ')}</p>
              <p>${item.price}</p>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => updateQuantity(index, parseInt(e.target.value))}
                min="1"
              />
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </div>
          </div>
        ))
      )}
      <Link to="/checkout">
        <button className="checkout-button">Proceed to Checkout</button>
      </Link>
    </div>
  </div>
);

export default Cart;












