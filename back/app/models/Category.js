const sequelize = require('../database');
const { DataTypes, Model } = require('sequelize');

class Category extends Model { }

Category.init({
  label: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'category'
});

module.exports = Category;