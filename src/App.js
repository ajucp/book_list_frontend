import React, { useState, useEffect } from 'react';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import axios from 'axios';
import './index.css';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  // Fetch books from the API
  const fetchBooks = async () => {
    try {
      const response = await axios.get('https://book-list-app-zmue.onrender.com/api/books');
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  // Handle adding a new book and update the books state
  const handleAddBook = async (newBook) => {
    try {
      // Post to backend
      await axios.post('https://book-list-app-zmue.onrender.com/api/books', newBook);
      
      // Refresh the book list after successful addition
      fetchBooks();
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  // Handle deleting a book
  const handleDeleteBook = async (bookId) => {
    try {
      await axios.delete(`https://book-list-app-zmue.onrender.com/api/books/${bookId}`);
      setBooks(books.filter((book) => book._id !== bookId));
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Book Listing</h1>
      <AddBook onAdd={handleAddBook} />
      <BookList books={books} onDelete={handleDeleteBook} />
    </div>
  );
}

export default App;
