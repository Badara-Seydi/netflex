const express = require('express');
const router = express.Router();
const apiRouter = require('./apiRouter').router;

const mainController = require('../controllers/mainController');
// errorController,
const categoryController = require('../controllers/categoryController');
const movieController = require('../controllers/movieController');
// ,

const userController = require('../controllers/userController');
const {tokenMiddleware}= require('../middlewares')



router.use('/api', apiRouter)
router.get('/', mainController.homePage)

    //User
    .get('/login',userController.login)
    .get('/logout', userController.logout)
    .post('/signup', userController.signUp)
    .get('/allusers', userController.getAll)
    .get('/user/:id', userController.getOne)
    .post('/user/:id',tokenMiddleware.authenticate, userController.updateOne)
    .delete('/user/:id',tokenMiddleware.authenticate, userController.deleteOne)
    .get('/category', categoryController.getAll)

    //User's Movies


    //     .get('/category/:id/movie', categoryController.getMovies)
    //     .get('/movie/popular', movieController.getRandom)
    //     .get('/movie/popular', movieController.getPopular)
    //     .get('/movie/lastest', movieController.getLastest)
    //     .get('/movie/bestrated', movieController.getBestRated)
    .get('/movie/:id', movieController.getMovieByID)
//     .get('/movie/category/:id', movieController.getMovieByCategory)
//    .get('/user/new' , userController.signUp)
//     .get('/user/:id/collection', userController.getCollection)
//     .get('/user/:id/commentary', userController.getCommentary)

//     .use(errorController.resourceNotFound)

module.exports = router;