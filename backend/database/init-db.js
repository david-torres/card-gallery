// init-db.js

require('dotenv').config();
const { Sequelize } = require('sequelize');
const CardModel = require('../models/card');

// Initialize Sequelize and connect to database
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT,
  storage: process.env.DB_STORAGE,
});

const models = {
  Card: CardModel(sequelize, Sequelize)
}

// Set up associations
Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

sequelize.sync({ force: true })
  .then(() => {
    console.log('Database initialized successfully.');
  })
  .catch((error) => {
    console.error('Error initializing database:', error);
  });
