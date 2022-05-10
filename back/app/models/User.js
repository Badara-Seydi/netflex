const sequelize = require('../database');
const { DataTypes, Model } = require('sequelize');

class User extends Model { }

User.init({
  email: {
    type: DataTypes.TEXT,
    allowNull:true
  },
  password: {
    type: DataTypes.TEXT,
    allowNull:true
  },
  pseudo: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  description: {
    type: DataTypes.TEXT,
    allowNull:true
  },
  profil_photo_url: {
    type: DataTypes.TEXT,
    allowNull:true
  },
  role_id: {
    type: DataTypes.TEXT,
    allowNull:true
  },
  bookmarks:{
    type: DataTypes.STRING,
    allowNull:true
  }
//   createdAt:{
//     type: DataTypes.STRING,
//     allowNull:true
//   },
//   updatedAt:{
//     type:DataTypes.STRING,
//     allowNull:true
// }
},
 {
  sequelize,
  tableName: 'user'
});

module.exports = User;