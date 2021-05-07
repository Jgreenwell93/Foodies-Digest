// const { noExtendLeft } = require("sequelize/types/lib/operators");

const ingredientSearchHandler = async (event) => {
    event.preventDefault();

    var ingredientOne = document.querySelector('#input-ingredient-one').value;
    var ingredientTwo = document.querySelector('#input-ingredient-two').value;
    var ingredientThree = document.querySelector('#input-ingredient-three').value;

    var ingredients = "";

  if (ingredientOne || ingredientTwo || ingredientThree) {
    if (ingredientOne) {
      ingredients += ingredientOne;
    }
    if (ingredientTwo) {
      ingredients += ',' + ingredientTwo;
    }
    if (ingredientThree) {
      ingredients += ',' + ingredientThree;
    }
    var apikey = '481279d87a314d4d94b73f8882f542e7';
    var searchByIngredientsUrl = 'https://api.spoonacular.com/recipes/complexSearch/?includeIngredients=' + ingredients + '&instructionsRequired=true&apiKey=' + apikey + '&number=4';    
    fetch(searchByIngredientsUrl).then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {

            const recipeArray = data.results.map( (recipe) => {
              return {
                recipe_id: recipe.id,
                title: recipe.title,
                image: recipe.image,
              }
            });

            if (recipeArray.length > 0) {
              const response = fetch('/search', {
                method: 'POST',
                body: JSON.stringify({ recipeArray }),
                headers: {
                  'Content-Type': 'application/json',
                },
              });
            }  
            if (response.ok) {

              document.location.replace('/results');
              // response.render('/results');
            } else {
              alert('Failed to update blog post');
            }
        });
      }    
    });
  }
};


document
  .querySelector('#search-button')
  .addEventListener('click', ingredientSearchHandler);
