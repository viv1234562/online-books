
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import BookPage from './pages/BookPage';
import CheckoutPage from './pages/CheckoutPage';
import Cart from './components/Cart';
import Login from './components/Login';
import SearchBar from './components/SearchBar'; 
import './App.css';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (book) => {
    const bookExists = cart.find((item) => item.id === book.id);
    if (bookExists) {
      setCart(cart.map((item) =>
        item.id === book.id ? { ...bookExists, quantity: bookExists.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...book, quantity: 1 }]);
    }
    toast.success(`${book.title} added to cart`);
  };

  const updateQuantity = (index, quantity) => {
    const newCart = [...cart];
    newCart[index].quantity = quantity;
    setCart(newCart);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const handleSearch = (query) => {
    // Implement search functionality here
    console.log('Search query:', query);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <Router>
      <Header loggedIn={loggedIn} handleLogout={handleLogout} onSearch={handleSearch} />
      <Routes>
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path="/" element={loggedIn ? <HomePage addToCart={addToCart} /> : <Navigate to="/login" />} />
        <Route path="/book/:id" element={loggedIn ? <BookPage addToCart={addToCart} /> : <Navigate to="/login" />} />
        <Route path="/cart" element={loggedIn ? <Cart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} /> : <Navigate to="/login" />} />
        <Route path="/search" element={loggedIn ? <SearchBar onSearch={handleSearch} /> : <Navigate to="/login" />} />
        <Route path="/checkout" element={loggedIn ? <CheckoutPage cart={cart} /> : <Navigate to="/login" />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
};

export default App;


























