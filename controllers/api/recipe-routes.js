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

module.exports = router;