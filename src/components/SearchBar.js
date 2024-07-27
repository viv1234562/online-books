
import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [searchType, setSearchType] = useState('all');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query, searchType);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value, searchType);
  };

  return (
    <form onSubmit={handleSearch} className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search books..."
      />
      <select value={searchType} onChange={(e) => setSearchType(e.target.value)}>
        <option value="all">All</option>
        <option value="title">Title</option>
        <option value="author">Author</option>
        <option value="genre">Genre</option>
      </select>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;





