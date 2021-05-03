var userFormEl = document.querySelector('#user-form');
var ingredientInputEl = document.querySelector('#username');
var repoContainerEl = document.querySelector('#repos-container');
var repoSearchTerm = document.querySelector('#repo-search-term');

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

var getFeaturedRepos = function (language) {
  var apiUrl = 'https://api.github.com/search/repositories?q=' + language + '+is:featured&sort=help-wanted-issues';

  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        displayRepos(data.items, language);
      });
    } else {
      alert('Error: ' + response.statusText);
    }
  });
};

var displayRecipes = function (recipes, searchTerm) {
  if (recipes.length === 0) {
    repoContainerEl.textContent = 'No recipes found.';
    return;
  }

  repoSearchTerm.textContent = searchTerm;

  for (var i = 0; i < recipes.length; i++) {
    var recipeTitle = recipes[i].title;

    var recipeEl = document.createElement('a');
    recipeEl.classList = 'list-item flex-row justify-space-between align-center';
    recipeEl.setAttribute('href', './single-repo.html?repo=' + recipeTitle);

    var titleEl = document.createElement('span');
    titleEl.textContent = recipeTitle;

    recipeEl.appendChild(titleEl);

    var statusEl = document.createElement('span');
    statusEl.classList = 'flex-row align-center';

    recipeEl.appendChild(statusEl);

    repoContainerEl.appendChild(recipeEl);
  }
};

userFormEl.addEventListener('submit', formSubmitHandler);

