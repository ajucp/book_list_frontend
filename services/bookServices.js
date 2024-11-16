// services/bookService.js
const Book = require('../models/bookModels');

exports.getBooks=async() =>{
    try {
      const books = await Book.getAllBooks();
      return books;
    } catch (err) {
        console.log("error is get book services")
      throw new Error('Error retrieving books');
    }
  }

exports.addBook=  async ({ title, author, description }) =>{
    try {
        // console.log('hai form service')
      const newBook = await Book.createBook({ title, author, description });
      return newBook;
    } catch (err) {
    console.log("error is post book services")
      throw new Error('Error adding book');
    }
  }

exports.removeBook=async (id) =>{
    try {
      const result = await Book.deleteBookById(id);
      if (result.deletedCount === 0) {
        throw new Error('Book not found');
      }
      return { message: 'Book deleted successfully' };
    } catch (err) {
        console.log("error is delete book services")
      throw err;
    }
  }



