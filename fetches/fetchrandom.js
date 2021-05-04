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
  var apikey = '2a40afcf346f48508fca4af2488f00c9'
  var apiUrl = 'https://api.spoonacular.com/recipes/random?' + 'apiKey=' + apikey + '&number=3';
  console.log('apiurl = ' + apiUrl);

  fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          console.log(data);
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

  console.log(collapseTitleOneEl.innerHTML);
  console.log(recipes.recipes[0].title);
  console.log(recipes.recipes[0].instructions);

  collapseTitleOneEl.innerHTML = recipes.recipes[0].title;
  collapseTitleTwoEl.innerHTML = recipes.recipes[1].title;
  collapseTitleThreeEl.innerHTML = recipes.recipes[2].title;
  collapseRecipeOneEl.innerHTML = recipes.recipes[0].instructions;
  collapseRecipeTwoEl.innerHTML = recipes.recipes[1].instructions;
  collapseRecipeThreeEl.innerHTML = recipes.recipe[2].instructions;

}


getRecipes();

// userFormEl.addEventListener('submit', formSubmitHandler);

