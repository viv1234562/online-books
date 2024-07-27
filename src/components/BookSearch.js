// // src/components/BookSearch.js
// import React, { useState } from 'react';
// import SearchBar from './SearchBar';
// import BookCard from './BookCard';
// import { fetchBooks } from '../api/books';
// import './BookSearch.css';

// const BookSearch = () => {
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleSearch = async (query, searchType) => {
//     setLoading(true);
//     setError(null);
//     try {
//       const result = await fetchBooks(query, searchType);
//       setBooks(result);
//     } catch (err) {
//       setError('Failed to fetch books');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="book-search">
//       <SearchBar onSearch={handleSearch} />
//       {loading && <div className="loader">Loading...</div>}
//       {error && <div className="error">{error}</div>}
//       <div className="book-list">
//         {books.length > 0 ? (
//           books.map((book) => (
//             <BookCard
//               key={book.id}
//               coverImage={book.coverImage}
//               title={book.title}
//               authors={book.authors}
//               price={book.price}
//               description={book.description}
//             />
//           ))
//         ) : (
//           !loading && <h1>No books found for "{query}".</h1>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BookSearch;
