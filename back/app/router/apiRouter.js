const express = require('express');
const tokenController = require('../controllers/tokenController');


exports.router = (function(){
    const apiRouter = express.Router();

    apiRouter.route('/users/register/').post(tokenController.register);
    apiRouter.route('/users/login/').post(tokenController.login);

    return apiRouter;
})();
