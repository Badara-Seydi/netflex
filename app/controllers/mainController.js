const { Movie } = require('../models/');

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
    AboutAPI : (req,res,next)=>{

      

    }
}


module.exports = mainController;