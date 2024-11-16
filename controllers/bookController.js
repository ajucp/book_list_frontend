// controllers/bookController.js
const BookService = require('../services/bookServices');

exports.getAllBooks=async (req, res,next)=> {
    try {
      const books = await BookService.getBooks();
      res.json(books);
    } catch (err) {
        console.log("error is get book controller")
      res.status(500).json({ message: err.message });
    }
  }

exports.addBook=async (req, res,next)=> {
    const { title, author, description } = req.body;
    console.log(title,author,description)
    if (!title || !author || !description) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    try {
      const newBook = await BookService.addBook({ title, author, description });
      console.log(newBook)
      res.status(201).json(newBook);  // Return the created book
    } catch (err) {
      console.log("error is post book controller")
      res.status(500).json({ message: err.message });
    }
  }

exports.deleteBook=async (req, res,next)=> {
    const { id } = req.params;
    try {
      const response = await BookService.removeBook(id);
      res.json(response);
    } catch (err) {
        console.log("error is delete book controller")
      res.status(500).json({ message: err.message });
    }
  }

