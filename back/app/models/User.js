const sequelize = require('../database');
const { DataTypes, Model } = require('sequelize');

class User extends Model { }

User.init({
  name: {
    type: DataTypes.TEXT,
    allowNull:true
  },
  lastname: {
    type: DataTypes.TEXT,
    allowNull:true
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  password: {
    type: DataTypes.TEXT,
    allowNull:true
  },
  profil_photo_url: {
    type: DataTypes.TEXT,
    allowNull:true
  },
  description: {
    type: DataTypes.TEXT,
    allowNull:true
  },
}, {
  sequelize,
  tableName: 'user'
});

module.exports = User;