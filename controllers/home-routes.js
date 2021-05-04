const { Recipe } = require('../models');
const { User } = require('../models')

const router = require('express').Router();
// const withAuth = require('../../utils/auth');

// get route for homepage
router.get('/', async (req, res) => {
    try {
      const dbTempRecipes = await Recipe.findAll({
            attributes: ['title', 'image', ],
          },
      );
      const tempRecipes = dbTempRecipes.map((ele) =>
        ele.get({ plain: true })
      );
  
      res.render('homepage', {
        tempRecipes,
        // loggedIn: req.session.loggedIn,
      });
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

