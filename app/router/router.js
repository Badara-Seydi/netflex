const express = require('express');
const router = express.Router();

const mainController= require('../controllers/mainController');
    // errorController,
const categoryController=require('../controllers/categoryController')
    // movieController,
    
const userController=require('../controllers/userController')




router.get('/', mainController.homePage)
    

// .post('/login', mainController.aboutAPI)
//     .post('/signup', mainController.aboutAPI)
     .get('/category', categoryController.getAll)
//     .get('/category/:id/movie', categoryController.getMovies)
//     .get('/movie/popular', movieController.getRandom)
//     .get('/movie/popular', movieController.getPopular)
//     .get('/movie/lastest', movieController.getLastest)
//     .get('/movie/bestrated', movieController.getBestRated)
//     .get('/movie/:id', movieController.getMovieByID)
//     .get('/movie/category/:id', movieController.getMovieByCategory)
     .get('/user/:id', userController.getInformations)
//     .get('/user/:id/collection', userController.getCollection)
//     .get('/user/:id/commentary', userController.getCommentary)

//     .use(errorController.resourceNotFound)

module.exports=router;