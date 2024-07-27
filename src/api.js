

import axios from 'axios';

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

const mapBookData = (item) => ({
  id: item.id,
  title: item.volumeInfo.title,
  authors: item.volumeInfo.authors || ['Unknown Author'],
  genre: item.volumeInfo.categories || ['Unknown Genre'],
  description: item.volumeInfo.description || 'No description available.',
  coverImage: item.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/128x194.png?text=No+Image',
  price: item.saleInfo?.retailPrice?.amount || 10.99 // Default price if not available
});

export const fetchBooks = async (query) => {
  const response = await axios.get(BASE_URL, {
    params: {
      q: query,
      maxResults: 40 
    }
  });

  const { items } = response.data;
  if (items) {
    return items.map(mapBookData);
  }

  return [];
};

export const fetchBookDetails = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  const item = response.data;
  return mapBookData(item);
};







///main


// import React, { useContext } from 'react';
// import { SearchContext } from '../SearchContext';
// import './SearchBar.css';

// const SearchBar = () => {
//  // const { query, handleSearch } = useContext(SearchContext);

//   const handleInputChange = (e) => {
//     const searchQuery = e.target.value;
//    // handleSearch(searchQuery);
//   };

//   return (
//     <div className="search-bar">
//       <input
//         type="text"
//       //  value={query}
//         onChange={handleInputChange}
//         placeholder="Search for books by title, author, or genre..."
//       />
//     </div>
//   );
// };

// export default SearchBar;







// // src/api.js

// import axios from 'axios';

// const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

// const mapBookData = (item) => ({
//   id: item.id,
//   title: item.volumeInfo.title,
//   authors: item.volumeInfo.authors || ['Unknown Author'],
//   genre: item.volumeInfo.categories || ['Unknown Genre'],
//   description: item.volumeInfo.description || 'No description available.',
//   coverImage: item.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/128x194.png?text=No+Image',
//   price: item.saleInfo?.retailPrice?.amount || 10.99 // Default price if not available
// });

// export const fetchBooks = async (query) => {
//   const response = await axios.get(BASE_URL, {
//     params: {
//       q: query,
//       maxResults: 40 // Fetch up to 40 books
//     }
//   });

//   const { items } = response.data;
//   if (items) {
//     return items.map(mapBookData);
//   }

//   return [];
// };

// export const fetchBookDetails = async (id) => {
//   const response = await axios.get(`${BASE_URL}/${id}`);
//   const item = response.data;
//   return mapBookData(item);
// };

