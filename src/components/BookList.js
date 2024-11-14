import React from 'react';

const BookList = ({ books, onDelete }) => {
  return (
    <div className="book-list">
      <h2 className="text-2xl font-bold mb-4">Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book._id} className="p-4 border-b border-gray-200">
            <h3 className="font-semibold text-lg">{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>{book.description}</p>
            <button
              onClick={() => onDelete(book._id)}
              className="text-red-500 mt-2"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
