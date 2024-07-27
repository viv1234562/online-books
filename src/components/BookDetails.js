
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBookDetails } from '../api';

const BookDetails = ({ addToCart }) => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const getBook = async () => {
      const data = await fetchBookDetails(id);
      setBook(data);
    };
    getBook();
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div className="book-details">
      <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
      <h2>{book.volumeInfo.title}</h2>
      <h3>{book.volumeInfo.authors.join(', ')}</h3>
      <p>{book.volumeInfo.description}</p>
      <button onClick={() => addToCart(book)}>Add to Cart</button>
    </div>
  );
};

export default BookDetails;


