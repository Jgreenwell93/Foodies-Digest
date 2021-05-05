const { Recipe } = require('../models');
const { User } = require('../models')


const router = require('express').Router();

// const withAuth = require('../../utils/auth');

var apikey = 'a8fa9c6592244caeb366aac4bd3ddb69'
var apiUrl = 'https://api.spoonacular.com/recipes/random?' + 'apiKey=' + apikey + '&number=3';

const fetch = require('node-fetch');

router.get('/', async (req, res) => {
  try {
    const recipeData = await fetch(apiUrl).then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
              // console.log(data);
            const recipeArray = data.recipes.map( (recipe) => {
              return {
                id: recipe.id,
                title: recipe.title,
                instructions: recipe.instructions,
                image: recipe.image,
              }
            });  
            console.log(recipeArray);

            res.render('homepage', {
            recipeArray
          });            
          });
      }    
  })
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



router.get('/search', async (req, res) => {
  console.log("i'm in home-route search");
  try {
      ingredients = req.body.ingredientOne;  // put this back when hooking up to handlebars and event handlder
      console.log('ingredients =' + ingredients);
    // var ingredients = 'chicken';
    var searchByIngredientsUrl = 'https://api.spoonacular.com/recipes/complexSearch/?includeIngredients=' + ingredients + '&instructionsRequired=true&apiKey=' + apikey + '&number=1';    
    console.log(searchByIngredientsUrl);
    const recipeData = await fetch(searchByIngredientsUrl).then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
          console.log(data);

          console.log(data.results);
            const recipeArray = data.results.map( (recipe) => {
              return {
                id: recipe.id,
                title: recipe.title,
                image: recipe.image,
              }
            });  
            console.log('recipeArray = ');
            console.log(recipeArray);

            res.render('results', {
            recipeArray
          });            
          });
      }    
  })
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});









  router.get('/login', (req, res) => {
    // if (req.session.loggedIn) {
    //   res.redirect('/');
    //   return;
    // }
  
    res.render('login');
  });

router.get('/signup', (req, res) => {
    // if (req.session.loggedIn) {
    //   res.redirect('/');
    //   return;
    // }
  
    res.render('signup');
});







module.exports = router;






