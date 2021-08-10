require('dotenv').config();
const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('postgres://postgres@localhost:5432/netflex', {
  define: {
    underscored: true
  },
});



module.exports = sequelize;