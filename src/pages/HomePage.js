 import React, { useEffect, useState } from 'react';
import { fetchBooks } from '../api';
import BookList from '../components/BookList';

const HomePage = ({ addToCart }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchBooks('react'); 
        setBooks(data);
      } catch (error) {
        console.error('Error fetching books:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <BookList books={books} addToCart={addToCart} />
    </div>
  );
};

export default HomePage;








