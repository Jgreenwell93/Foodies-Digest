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

var getRecipes = function (ingredient) {
  var apikey = '2a40afcf346f48508fca4af2488f00c9'
  var apiUrl = 'https://api.spoonacular.com/recipes/findByIngredients?ingredients=' + ingredient + '&apiKey=' + apikey;
  console.log('apiurl = ' + apiUrl);

  fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          displayRecipes(data, ingredient);
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    })
    .catch(function (error) {
      alert('Unable to connect to Spoonacular');
    });
};

var displayRecipes = function (recipes, searchTerm) {
  if (recipes.length === 0) {
    recipeContainerEl.textContent = 'No recipes found.';
    return;
  }

  console.log(recipes);

  recipeSearchTerm.textContent = searchTerm;

  for (var i = 0; i < recipes.length; i++) {
    var recipeTitle = recipes[i].title;
    var recipeID = recipes[i].id;

    var recipeEl = document.createElement('a');
    recipeEl.classList = 'list-item flex-row justify-space-between align-center';
    recipeEl.setAttribute('href', './single-recipe.html?id=' + recipeID + '?title=' + recipeTitle);

    var titleEl = document.createElement('span');
    titleEl.textContent = recipeTitle;

    recipeEl.appendChild(titleEl);

    var statusEl = document.createElement('span');
    statusEl.classList = 'flex-row align-center';

    recipeEl.appendChild(statusEl);

    recipeContainerEl.appendChild(recipeEl);
  }
};

userFormEl.addEventListener('submit', formSubmitHandler);

