

// import React from 'react';
// import PropTypes from 'prop-types';

// const BookList = ({ books, addToCart }) => {
//   return (
//     <div className="container">
//       {books.map((book) => (
//         <div className="book-card" key={book.id}>
//           <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
//           <h3>{book.volumeInfo.title}</h3>
//           <p>{book.volumeInfo.authors?.join(', ')}</p>
//           <button onClick={() => addToCart(book)}>Add to Cart</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// BookList.propTypes = {
//   books: PropTypes.array.isRequired,
//   addToCart: PropTypes.func.isRequired,
// };

// export default BookList;

///////

import React from 'react';
import BookCard from './BookCard';

const BookList = ({ books, addToCart }) => (
  <div className="container">
    {books.map(book => (
      <BookCard key={book.id} book={book} addToCart={addToCart} />
    ))}
  </div>
);

export default BookList;








