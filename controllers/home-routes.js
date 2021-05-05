const { Recipe } = require('../models');
const { User } = require('../models')


const router = require('express').Router();
// const withAuth = require('../../utils/auth');

var apikey = '481279d87a314d4d94b73f8882f542e7'
var apiUrl = 'https://api.spoonacular.com/recipes/random?' + 'apiKey=' + apikey + '&number=3';
const fetch = require('node-fetch');

// get route for homepage
// router.get('/', async (req, res) => {
//     try {
//       const dbTempRecipes = await Recipe.findAll({
//             attributes: ['title', 'image', ],
//           },
//       );
//       const tempRecipes = dbTempRecipes.map((ele) =>
//         ele.get({ plain: true })
//       );
  
//       res.render('homepage', {
//         tempRecipes,
//         // loggedIn: req.session.loggedIn,
//       });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   });

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

