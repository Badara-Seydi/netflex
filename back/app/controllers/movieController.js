const { Movie, Category, User } = require('../models/');

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

    search: async (request, response) => {
      try {
        const search = request.params.search;
        console.log(request.params.search)
        const movie = await Movie.findAll({
          include: {
            all: true
          },
          where: {
            name: {
  
              [Op.iLike]: `%${search}%`
            },
          }
        });
        response.json(movie);
      } catch (error) {
        console.log(error)
      }
    },

    
}

module.exports=movieController;