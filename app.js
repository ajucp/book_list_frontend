const express = require('express');
const bodyParser=require('body-parser');
const cors = require('cors');
const {connectDB}  = require('./util/database');
const bookRoutes=require('./routes/books');
const dotenv = require('dotenv');
dotenv.config();


const app = express();
// console.log('hai')
app.use(cors());
app.use(bodyParser.json());
app.use('/api', bookRoutes);  // All book routes prefixed with /api

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  });