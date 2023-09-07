const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cardsRouter = require('./routes/cards');
const { Sequelize } = require('sequelize');

// Initialize the Express app
const app = express();
const port = 3000;

// Initialize Sequelize with SQLite database
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database/cards-database.sqlite'
});

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse JSON requests
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded requests
app.use(express.static('frontend')); // Serve static files from 'frontend' folder

// Test database connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

// Routes
app.use('/', cardsRouter); // Main routes (including frontend and API routes)

// Listen
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
