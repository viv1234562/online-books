
import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import './Header.css';

const Header = ({ onSearch }) => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-title">Online Bookstore</div>
        <div className="header-nav">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
        </div>
      </div>
      <SearchBar onSearch={onSearch} />
    </header>
  );
};

export default Header;





















