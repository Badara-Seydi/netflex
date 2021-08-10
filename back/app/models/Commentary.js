const sequelize = require('../database');
const { DataTypes, Model } = require('sequelize');

class Commentary extends Model { }

Commentary.init({
  content : {
    type: DataTypes.TEXT,
    allowNull: false
  },

}, {
  sequelize,
  tableName: 'commentary'
});

module.exports = Commentary;