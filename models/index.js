const User = require('./User');
const Recipe = require('./Recipe');
const UserRecipe = require('./UserRecipe');


UserRecipe.belongsTo(User, {
    foreignKey: 'user_id',
  });
  
// Recipe.hasMany(User, {
//     foreignKey: 'id',
//   });

UserRecipe.belongsTo(Recipe, {
    foreignKey: 'recipe_id',
});

// User.hasMany(Recipe, {
//     through: Recipe,
//     foreignKey: 'id',
// });

// Recipe.belongsToMany(User, {
//     through: User,
//     foreignKey: 'id',
// });


module.exports = { User, Recipe, UserRecipe };