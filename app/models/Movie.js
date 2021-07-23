const sequelize = require('../database');
const { DataTypes, Model } = require('sequelize');
const { datatype } = require('faker');

class Movie extends Model { }

Movie.init({
  original_title: {
    type: DataTypes.TEXT,
    allowNull: false
  },
 category: {
    type: datatype.array,
    allowNull:false
  },
  overview: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  release_date: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  poster_path: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  backdrop_path: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  popularity: {
    type: DataTypes.TEXT,
    allowNull: false
  },
}, {
  sequelize,
  tableName: 'movie'
});

module.exports = Movie;
