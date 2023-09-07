const express = require('express');
const router = express.Router();
const cardsController = require('../controllers/cardController');
const path = require('path');

// Frontend routes
router.get('/gallery', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend', 'gallery.html'));
});

router.get('/create', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend', 'create.html'));
});

router.get('/update/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend', 'update.html'));
});

// API routes (Backend)

// Create a new card
router.post('/api/', cardsController.createCard);

// Read all cards
router.get('/api/', cardsController.readAllCards);

// Read a card by its ID
router.get('/api/:id', cardsController.readCardById);

// Update a card by its ID
router.put('/api/:id', cardsController.updateCard);

// Delete a card by its ID
router.delete('/api/:id', cardsController.deleteCard);

// Optional: Search cards by name
router.get('/api/search', cardsController.searchCards);

module.exports = router;
