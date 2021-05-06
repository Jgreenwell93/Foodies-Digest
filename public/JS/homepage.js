// const { noExtendLeft } = require("sequelize/types/lib/operators");

const ingredientSearchHandler = async (event) => {
    event.preventDefault();

    console.log('in homepage.js');
    var ingredientOne = document.querySelector('#input-ingredient-one').value;
    var ingredientTwo = document.querySelector('#input-ingredient-two').value;
    var ingredientThree = document.querySelector('#input-ingredient-three').value;

    console.log(ingredientOne);
    console.log(ingredientTwo);
    var ingredients = "";

  if (ingredientOne || ingredientTwo || ingredientThree) {
    var apikey = '2b152eb0695849fb8ee97ece69af186f';
    var searchByIngredientsUrl = 'https://api.spoonacular.com/recipes/complexSearch/?includeIngredients=' + ingredients + '&instructionsRequired=true&apiKey=' + apikey + '&number=1';    
    alert(searchByIngredientsUrl);
    fetch(searchByIngredientsUrl).then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
          console.log(data);

          console.log(data.results);
            const recipeArray = data.results.map( (recipe) => {
              return {
                id: recipe.id,
                title: recipe.title,
                image: recipe.image,
              }
            });  

            console.log('recipeArray = ');
            console.log(recipeArray);

            if (recipeArray.length > 0) {
              console.log('ingredientOne = ' + ingredientOne);
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
              console.log(response);
            }
        });
      }    
    });
  }
};


document
  .querySelector('#search-button')
  .addEventListener('click', ingredientSearchHandler);