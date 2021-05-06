var userFormEl = document.querySelector('#user-form');
var ingredientInputEl = document.querySelector('#username');
var recipeContainerEl = document.querySelector('#repos-container');
var recipeSearchTerm = document.querySelector('#repo-search-term');

var formSubmitHandler = function (event) {
  event.preventDefault();

  var ingredient = ingredientInputEl.value.trim();

  if (ingredient) {
    getRecipes(ingredient);


    ingredientInputEl.value = '';
  } else {
    alert('Please enter a recipe ingredient');
  }
};

var getRecipes = function () {
  var apikey = 'a8fa9c6592244caeb366aac4bd3ddb69'
  var apiUrl = 'https://api.spoonacular.com/recipes/random?' + 'apiKey=' + apikey + '&number=3';
 
  fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          displayRecipes(data);
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    })
    .catch(function (error) {
      alert('Unable to connect to Spoonacular');
    });
};

var displayRecipes = function (recipes) {

  var collapseTitleOneEl = document.querySelector('#collapse-title-one');
  var collapseTitleTwoEl = document.querySelector('#collapse-title-two');
  var collapseTitleThreeEl = document.querySelector('#collapse-title-three');
  var collapseRecipeOneEl = document.querySelector('#collapse-recipe-one');
  var collapseRecipeTwoEl = document.querySelector('#collapse-recipe-two');
  var collapseRecipeThreeEl = document.querySelector('#collapse-recipe-three');


  collapseTitleOneEl.innerHTML = recipes.recipes[0].title;
  collapseTitleTwoEl.innerHTML = recipes.recipes[1].title;
  collapseTitleThreeEl.innerHTML = recipes.recipes[2].title;
  collapseRecipeOneEl.innerHTML = recipes.recipes[0].instructions;
  collapseRecipeTwoEl.innerHTML = recipes.recipes[1].instructions;
  collapseRecipeThreeEl.innerHTML = recipes.recipe[2].instructions;

}


getRecipes();

// userFormEl.addEventListener('submit', formSubmitHandler);

