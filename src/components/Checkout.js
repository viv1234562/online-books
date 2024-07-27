// import React, { useState } from 'react';

// const Checkout = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     address: '',
//     paymentInfo: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Simulate checkout process
//     console.log('Checkout data:', formData);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="name"
//         placeholder="Name"
//         value={formData.name}
//         onChange={handleChange}
//       />
//       <input
//         type="email"
//         name="email"
//         placeholder="Email"
//         value={formData.email}
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="address"
//         placeholder="Address"
//         value={formData.address}
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="paymentInfo"
//         placeholder="Payment Information"
//         value={formData.paymentInfo}
//         onChange={handleChange}
//       />
//       <button type="submit">Checkout</button>
//     </form>
//   );
// };

// export default Checkout;





////this is main//
import React, { useState } from 'react';
import './Checkout.css'; // Ensure this CSS file is imported

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    paymentInfo: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate checkout process
    console.log('Checkout data:', formData);
    setIsSubmitted(true);
  };

  return (
    <div className="checkout-container">
      {isSubmitted ? (
        <div className="thank-you-message">
          <h2>Thank you for shopping with us! 😊😊</h2>
        </div>
      ) : (
        <form className="checkout-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="paymentInfo"
            placeholder="Payment Information"
            value={formData.paymentInfo}
            onChange={handleChange}
            required
          />
          <button type="submit">Checkout</button>
        </form>
      )}
    </div>
  );
};

export default Checkout;







////////

;





