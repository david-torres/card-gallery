const fs = require('fs');
const csv = require('csv-parser');
const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

// Initialize Sequelize
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    storage: process.env.DB_STORAGE,
});

// import the Card model
const Card = require('../models/card')(sequelize);

// Function to bulk insert data into the Card table
const bulkInsertData = async (data) => {
  await sequelize.sync(); // Ensure that the table exists
  await Card.bulkCreate(data);
  console.log('Data has been inserted successfully.');
  await sequelize.close();
};

// Read CSV file and insert data
const data = [];

fs.createReadStream('path/to/your/data.csv')
  .pipe(csv())
  .on('data', (row) => {
    data.push(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
    bulkInsertData(data).catch(console.error);
  });
