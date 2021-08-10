const User = require('./User');
const Movie = require('./Movie');
const Commentary = require('./Commentary');
const Category = require('./Category');


// BelongsToMany = 0,N quand des deux cotés donc table avec une table de liaison dans le through avec has 
Movie.belongsToMany(Category, {       
    as: 'categories',
    through: 'movie_has_categories',
    foreignKey: 'movie_id',
    otherKey: 'category_id'
});

Category.belongsToMany(Movie, {
    as: 'movie',
    through: 'movie_has_categories',
    foreignKey: 'category_id',
    otherKey: 'movie_id'
});

User.belongsToMany(Movie, {
    as: 'movie',
    through: 'user_has_movies',
    foreignKey: 'user_id',
    otherKey: 'movie_id'
});

Movie.belongsToMany(User, {
    as: 'users',
    through: 'user_has_movies',
    foreignKey: 'movie_id',
    otherKey: 'user_id'
});
// 1-1 commentaire dépend d'un utilisateur !
Commentary.belongsTo(User, {
    as: 'author',
    foreignKey: 'user_id'
});
// 0,N L'utilisateur a PLUSIEURS commentaires ! 
User.hasMany(Commentary, {
    as: 'commentaries',
    foreignKey: 'user_id'
});

Commentary.belongsTo(Movie, {
    as: 'movie',
    foreignKey: 'movie_id'
});

Movie.hasMany(Commentary, {
    as: 'commentaries',
    foreignKey: 'movie_id'
});

module.exports = {
    User,
    Movie,
    Commentary,
    Category
}