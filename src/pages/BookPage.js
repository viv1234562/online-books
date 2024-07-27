
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBookDetails } from '../api';

const BookPage = ({ addToCart }) => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const getBookDetails = async () => {
      const data = await fetchBookDetails(id);
      setBook(data);
    };
    getBookDetails();
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div className="book-details">
      <img src={book.coverImage} alt={book.title} />
      <h2>{book.title}</h2>
      <p>{book.authors.join(', ')}</p>
      <p>{book.genre.join(', ')}</p>
      <p>{book.description}</p>
      <p>${book.price}</p>
      <button onClick={() => addToCart(book)}>Add to Cart</button>
    </div>
  );
};

export default BookPage;



/////










