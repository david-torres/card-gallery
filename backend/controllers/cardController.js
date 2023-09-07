const { Card } = require('../models/card');
const { Op } = require('sequelize');

const createCard = async (req, res) => {
  try {
    const card = await Card.create(req.body);
    res.status(201).json(card);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create card' });
  }
};

const readAllCards = async (req, res) => {
  try {
    const cards = await Card.findAll();
    res.status(200).json(cards);
  } catch (error) {
    res.status(400).json({ error: 'Failed to fetch cards' });
  }
};

const readCardById = async (req, res) => {
  try {
    const card = await Card.findByPk(req.params.id);
    if (card) {
      res.status(200).json(card);
    } else {
      res.status(404).json({ error: 'Card not found' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Failed to fetch card' });
  }
};

const updateCard = async (req, res) => {
  try {
    const card = await Card.update(req.body, {
      where: { id: req.params.id },
      returning: true,
      plain: true
    });

    if (card[1]) {
      res.status(200).json(card[1]);
    } else {
      res.status(404).json({ error: 'Card not found' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Failed to update card' });
  }
};

const deleteCard = async (req, res) => {
  try {
    const deleted = await Card.destroy({
      where: { id: req.params.id }
    });

    if (deleted) {
      res.status(200).json({ message: 'Card deleted' });
    } else {
      res.status(404).json({ error: 'Card not found' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete card' });
  }
};

// Implement card search based on 'name' attribute
const searchCards = async (req, res) => {
  try {
    const cards = await Card.findAll({
      where: {
        name: {
          [Op.like]: `%${req.query.q}%`
        }
      }
    });
    res.status(200).json(cards);
  } catch (error) {
    res.status(400).json({ error: 'Failed to search cards' });
  }
};

module.exports = {
  createCard,
  readAllCards,
  readCardById,
  updateCard,
  deleteCard,
  searchCards
};
