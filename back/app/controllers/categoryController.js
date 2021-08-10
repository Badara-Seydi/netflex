const { Movie, Category } = require('../models/');

const categoryController = {
    getAll: (req, res, next) => {
        Category.findAll({raw:true, nest:true})
    
          // Success
          .then(categoriesData => {
            console.log(categoriesData);
            res.render('category', {
              categoriesData
            })
          })
    
          // Error
          .catch(error => {
            console.log(error);
            next();
          });
    
}}


module.exports = categoryController;