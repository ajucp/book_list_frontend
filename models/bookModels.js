// models/bookModel.js
const { ObjectId } = require('mongodb');
const { getDB } = require('../util/database');  // Import DB connection

// Define Book Model operations
class Book {
    static async getAllBooks() {
      const db = getDB();
      return await db.collection('books').find().toArray();
    }
  
    static async createBook({ title, author, description }) {
      const db = getDB();
      const result = await db.collection('books').insertOne({ title, author, description });
    //   console.log(result)
      return result;  // Return the inserted book
    }
  
    static async deleteBookById(id) {
      const db = getDB();
      return await db.collection('books').deleteOne({ _id: new ObjectId(id) });
    }

}

module.exports = Book;
