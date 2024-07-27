


// import React from 'react';

// const BookCard = ({ book, addToCart }) => {
//   return (
//     <div className="book-card">
//       <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
//       <h3>{book.volumeInfo.title}</h3>
//       <p>{book.volumeInfo.authors?.join(', ')}</p>
//       <button onClick={() => addToCart(book)}>Add to Cart</button>
//     </div>
//   );
// };

// export default BookCard;


import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book, addToCart }) => (
  <div className="book-card">
    <img src={book.coverImage} alt={book.title} />
    <h3>{book.title}</h3>
    <p>{book.authors.join(', ')}</p>
    <button onClick={() => addToCart(book)}>Add to Cart</button>
    <Link to={`/book/${book.id}`}>More Details</Link>
  </div>
);

export default BookCard;

////






