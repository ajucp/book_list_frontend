const express=require('express');
const routes=express.Router();
const { getDB } = require('../util/database');
const { ObjectId } = require('mongodb');
const BookController = require('../controllers/bookController');

// GET /books - Retrieve all books
routes.get('/books', BookController.getAllBooks);
// POST /books - Add a new book
routes.post('/books', BookController.addBook);
// DELETE /books/:id - Delete a book by ID
routes.delete('/books/:id', BookController.deleteBook);



module.exports=routes