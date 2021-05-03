const router = require('express').Router();
const recipeRoutes = require('./recipe-routes');
// const userRoutes = require('./user-routes');
// const favoriteRoutes = require('./favorite-routes');

router.use('/recipe', recipeRoutes);
// router.use('/user', userRoutes);
// router.use('/favorite', favoriteRoutes);

module.exports = router;
