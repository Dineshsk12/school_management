// Import required modules
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// Create Express app
const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB Atlas', err);
  });

// Define routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Example of student routes (replace with your actual routes)
app.use('/api/students', require('./routes/studentRoutes'));

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
