const router = require('express').Router();
const { Recipe } = require('../../models');
const withAuth = require('../../utils/auth');

// recipe route tied to Post on front end:
// recipe CREATE ROUTE to save in database for logged in user
router.post('/', withAuth, async (req, res) => {
    try {
        console.log('========req.body========');
        console.log(req.body);
        console.log('========req.body========');
        const newRecipe = await Recipe.create({
            title: req.body.title,
            image: req.body.fullrecipeimg,
            recipe_id: req.body.recipe_id,
            user_id: req.session.user_id,
          });
        res.status(200).json(newRecipe);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


// route tied to Fetch (userRecipes/favorites) on front end for get all title/image:
// READ recipe GET ALL ROUTE to return db for logged in user (image, title, id?)
router.get('/favorites', withAuth, async (req, res) => {
    try {
        const allRecipeData = await Recipe.findAll({
            where: {
                user_id : req.session.user_id,
            },
        });
        const allRecipes = allRecipeData.map((allRecipe) =>
            allRecipe.get({ plain: true })
        );
        res.render('favorites', {
            allRecipes,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});



// route tied to PUT on front end to remove from favorites:
// route to DELETE/DESTROY saved receipes (if time)

var apikey = '2b152eb0695849fb8ee97ece69af186f';
var apiUrl = 'https://api.spoonacular.com/recipes/324694/information?apiKey=2b152eb0695849fb8ee97ece69af186f';
const fetch = require('node-fetch');

console.log("I'm in get by ID");
router.get('/:id', async (req, res) => {
    var apikey = 'a8fa9c6592244caeb366aac4bd3ddb69';
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
                        recipe_id: data.id,
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



router.delete('/delete/:id', withAuth, async (req, res) => {
    console.log("I'm in router.delete");
    try {
        const recipeData = await Recipe.destroy({
            where: {
                recipe_id: req.params.id,
            },
        });

        if (!recipeData) {
            res.status(404).json({ message: 'No recipe found with that id!' });
            return;
        }
        res.status(200).json(recipeData + ' product deleted!');
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;