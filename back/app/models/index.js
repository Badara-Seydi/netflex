const User = require('./User');
const Commentary = require('./Commentary');
const Category = require('./Category');


// BelongsToMany = 0,N quand des deux cotés donc table avec une table de liaison dans le through avec has 

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

module.exports = {
    User,
    Commentary
}