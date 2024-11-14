const express=require('express');
const routes=express.Router();
const { getDB } = require('../util/database');
const { ObjectId } = require('mongodb');

// GET /books - Retrieve all books
routes.get('/books', async (req, res) => {
  try {
    const db = getDB();
    const books = await db.collection('books').find().toArray();
    res.json(books);
  } catch (err) {
    console.log('---ERROR IN GET BOOKS---');
    res.status(500).json({ message: err.message });
  }
});

// POST /books - Add a new book
routes.post('/books', async (req, res) => {
  const { title, author, description } = req.body;
  if (!title || !author || !description) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const db = getDB();
    const result = await db.collection('books').insertOne({ title, author, description });
    res.status(201).json({result,message:'product added successfully'});  // Return the created book
  } catch (err) {
    console.log('---ERROR IN POST BOOKS---');
    res.status(500).json({ message: err.message });
  }
});

// DELETE /books/:id - Delete a book by ID
routes.delete('/books/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const db = getDB();
    const result = await db.collection('books').deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.json({ message: 'Book deleted successfully' });
  } catch (err) {
    console.log('---ERROR IN DELETE BOOKS---');
    res.status(500).json({ message: err.message });
  }
});



module.exports=routes