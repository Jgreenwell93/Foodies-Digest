const User = require('./User');
const Recipe = require('./Recipe');
const UserRecipe = require('./UserRecipe');


User.hasMany(Recipe, {
    foreignKey: 'id',
  });
  
Recipe.hasMany(User, {
    foreignKey: 'id',
  });

UserRecipe.belongsToMany(User, {
    through: User,
    foreignKey: 'id',
});

User.hasMany(Recipe, {
    through: Recipe,
    foreignKey: 'id',
});

Recipe.belongsToMany(User, {
    through: User,
    foreignKey: 'id',
});

User.hasMany(Recipe, {
    through: Recipe,
    foreignKey: 'id',
});

module.exports = { User, Recipe, UserRecipe };