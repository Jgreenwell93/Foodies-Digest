const router = require('express').Router();
const { Recipe } = require('../../models');
const withAuth = require('../../utils/auth');

// recipe route tied to Post on front end:
// recipe CREATE ROUTE to save in database for logged in user
router.post('/', withAuth, async (req, res) => {
    try {
        const newRecipe = await Recipe.create(req.body);
        res.status(200).json(newRecipe);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


// route tied to Fetch (userRecipes/favorites) on front end for get all title/image:
// READ recipe GET ALL ROUTE to return db for logged in user (image, title, id?)
router.get('/', withAuth, async (req, res) => {
    try {
        const allRecipeData = await Recipe.findAll({
            include: [
                {
                    model: Recipe,
                    attributes: ['image', 'title', 'id'],
                },
            ],
        });
        const allRecipe = allRecipeData.map((allRecipe) =>
            allRecipe.get({ plain: true })
        );
        res.render('selectedpassedhandlebartemp', {
            allRecipe,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


// route tied to Fetch (userRecipes/favorites) on front end for get one/return full recipe:
// READ recipe GET ONE ROUTE to return db for logged in user (full recipe)
router.get('/:title', withAuth, async (req, res) => {
    try {
        const recipeData = await Recipe.findOne({
            where: { title: req.params.title },
            include: [{
                model: Recipe
            },
            ],
        });
        if (!recipeData) {
            res.status(404).json({ message: 'No Recipe Found!' });
            return;
        }
        const fullRecipe = recipeData.map((fullRecipe) =>
            fullRecipe.get({ plain: true })
        );
        res.render('selectedhandlebartemp', {
            fullRecipe,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// route tied to PUT on front end to remove from favorites:
// route to DELETE/DESTROY saved receipes (if time)

router.delete('/:title', async (req, res) => {
    try {
        const recipeData = await Recipe.destroy({
            where: {
                recipe_title: req.params.title,
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