const { Recipe } = require('../models');

const recipeData = [
    { 
     id: 641803,
     title: 'Easy & Delish! ~ Apple Crumble',
     image: 'https://spoonacular.com/recipeImages/641803-312x231.jpg',
    },
    {
     id: 73420,
     title: 'Apple Or Peach Strudel',
     image: 'https://spoonacular.com/recipeImages/73420-312x231.jpg',   
    },
];

const seedRecipes = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipes;