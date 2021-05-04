const User = require('./User');
const Recipe = require('./Recipe');
const UserRecipe = require('./UserRecipe');


User.belongsToMany(Recipe, {
    through: {
        model: 'userRecipe',
        unique: false
    },
    as: 'uf'
});


Recipe.belongsToMany(User, {
    through: {
        model: 'userRecipe',
        unique: false
    },
    as: 'favrecipes'
});

module.exports = { User, Recipe, UserRecipe };
