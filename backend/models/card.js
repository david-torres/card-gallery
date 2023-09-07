const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Card extends Model { }

  Card.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    rarity: DataTypes.STRING,
    text: DataTypes.TEXT,
    image_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Card'
  });

  return Card;
};
