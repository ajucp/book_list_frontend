const { MongoClient } = require('mongodb');
require('dotenv').config();

const client = new MongoClient(process.env.MONGODB_URI);

let db;

const connectDB = async () => {
  try {
    await client.connect();
    db = client.db('bookdb');  // Database name is 'bookdb'
    console.log('Connected to MongoDB!');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

const getDB = () => db;

module.exports = { connectDB, getDB };
