const User = require('./User');
const Recipe = require('./Recipe');

User.hasMany(Recipe,{
  foreignKey:'user_id'
});


Recipe.belongsTo(User,{
  foreignKey:'user_id'
});

Recipe.belongsToMany(User, {
    through: {
        model: 'userRecipe',
        unique: false
    },
    as: 'favrecipes'
});

module.exports = { User, Recipe,};
