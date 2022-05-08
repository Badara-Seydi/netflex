const { request } = require('http');
const { Movie, User } = require('../models/');

const mainController = {
    homePage: (req, res, next) => {
        Movie.findAll({raw:true, nest:true})
    
          // Success
          .then(moviesData => {
            console.log(moviesData);
            res.render('index', {
              moviesData
            }),next()
          }
          )
    
          // Error
          .catch(error => {
            console.log(error);
            next();
          });
    
},

}


module.exports = mainController;