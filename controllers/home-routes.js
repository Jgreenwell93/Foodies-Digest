const { Recipe } = require('../models');
const { User } = require('../models')


const router = require('express').Router();

var recipeArray;
// const withAuth = require('../../utils/auth');

var apikey = '664e2f1a5b6e4ce29dc7c98941122be8';
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



router.post('/search', async (req, res) => {
  console.log("i'm in home-route search");
  try {

    recipeArray = req.body.recipeArray
    console.log("recipeArray in /search = ");
    console.log(recipeArray);
    res.status(200).json(recipeArray); 
    return recipeArray;
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/results', async (req, res) => {
  console.log(recipeArray);
  res.render('results', {recipeArray});
});









  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('signup');
});







module.exports = router;






