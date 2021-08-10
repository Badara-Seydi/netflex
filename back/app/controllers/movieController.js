const { Movie, Category } = require('../models/');

const movieController = {
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

    getMovieByID : (req,res,next)=>{
        Movie.findByPk(req.params.id)
        

        // Success
        .then(moviesData => {
            console.log(moviesData);
            res.render('oneMovie', {
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

module.exports=movieController;