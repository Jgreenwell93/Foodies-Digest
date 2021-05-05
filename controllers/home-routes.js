const router = require('express').Router();
const withAuth = require('../utils/auth');
const fetch = require('node-fetch');

// get route for homepage

module.exports = router;

var apikey = 'a8fa9c6592244caeb366aac4bd3ddb69'
var apiUrl = 'https://api.spoonacular.com/recipes/random?' + 'apiKey=' + apikey + '&number=3';    


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
              recipeData
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
    try {
        // ingredients = req.body.ingredients;  // put this back when hooking up to handlebars and event handlder
      var ingredients = 'chicken';
      var searchByIngredientsUrl = 'https://api.spoonacular.com/recipes/complexSearch/?includeIngredients=' + ingredients + '&instructionsRequired=true&apiKey=' + apikey + '&number=1';    
      const recipeData = await fetch(searchByIngredientsUrl).then(function (response) {
          if (response.ok) {
            response.json().then(function (data) {
            console.log(data);
              const recipeArray = data.results.map( (recipe) => {
                return {
                  id: recipe.id,
                  title: recipe.title,
                  image: recipe.image,
                }
              });  
              console.log(recipeArray);
  
              res.render('searchresults', {
              recipeData
            });            
            });
        }    
    })
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  







