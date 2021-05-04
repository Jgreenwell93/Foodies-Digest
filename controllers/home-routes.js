const { Recipe } = require('../models');

const router = require('express').Router();
// const withAuth = require('../../utils/auth');

// get route for homepage
router.get('/', async (req, res) => {
    try {
      const dbTempRecipes = await Recipe.findAll({
        include: [
          {
            model: Recipe,
            attributes: ['title', 'image', ],
          },
        ],
      });
  
      const tempRecipe = dbTempRecipes.map((ele) =>
        ele.get({ plain: true })
      );
  
      res.render('homepage', {
        tempRecipe,
        // loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
module.exports = router;