const router = require('express').Router();
const { Recipe } = require('../../models');
const withAuth = require('../../utils/auth');

// recipe route tied to Post on front end:
// recipe CREATE ROUTE to save in database for logged in user

// route tied to Fetch (userRecipes/favorites) on front end for get all title/image:
// READ recipe GET ALL ROUTE to return db for logged in user (image, title, id?)

// route tied to Fetch (userRecipes/favorites) on front end for get one/return full recipe:
// READ recipe GET ONE ROUTE to return db for logged in user (full recipe)

// route tied to PUT on front end to remove from favorites:
// route to DELETE/DESTROY saved receipes (if time)

var apikey = '2b152eb0695849fb8ee97ece69af186f';
var apiUrl = 'https://api.spoonacular.com/recipes/324694/information?apiKey=2b152eb0695849fb8ee97ece69af186f';
const fetch = require('node-fetch');

router.get('/:id', async (req, res) => {
    var apikey = '2b152eb0695849fb8ee97ece69af186f';
    var apiUrl = `https://api.spoonacular.com/recipes/${req.params.id}/information?apiKey=${apikey}`;
    console.log(req.params.id);
    try {
        const temp = await fetch(apiUrl).then(function (recipe) {
            if(recipe.ok) {
                recipe.json().then(function (data) {
                    let insArray = []

                    for(i = 0; i < data.analyzedInstructions.length; i++) {
                        for(j = 0; j < data.analyzedInstructions[i].steps.length; j++) {
                            insArray.push(data.analyzedInstructions[i].steps[j].step)
                        }
                    }

                    const fullRecipe = {
                        id: data.id,
                        title: data.title,
                        instructions: insArray,
                        image: data.image,
                        ingredients: data.extendedIngredients,
                    };
                    console.log(fullRecipe);
                    res.render('fullrecipe', {fullRecipe})
                })
            }
        })
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})




module.exports = router;