const ingredientSearchHandler = async (event) => {
    event.preventDefault();

    console.log('in homepage.js');
    var ingredientOne = document.querySelector('#input-ingredient-one').value;
    var ingredientTwo = document.querySelector('#input-ingredient-two').value;
    var ingredientThree = document.querySelector('#input-ingredient-three').value;
    var ingredients = [];

    console.log(ingredientOne);
    console.log(ingredientTwo);

    if (ingredientOne) {
        ingredients.push(ingredientOne); 
    }
    if (ingredientTwo) {
        ingredients.push(ingredientTwo); 
    }
    if (ingredientThree) {
        ingredients.push(ingredientThree); 
    }
      
    if (ingredients.length > 0) {
        console.log('ingredientOne = ' + ingredientOne);
        // const response = await fetch('/search', {
        //   method: 'POST',
        //   body: JSON.stringify({ ingredientOne }),
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        // });
        var url = `https://api.spoonacular.com/recipes/complexSearch/?includeIngredients=${ingredients}`

        const response = await fetch(url)
        .then(function(res){
          return res.json();
        })
        .then(function(data){
          console.log(data);
        })

    
        if (response.ok) {
          // document.location.replace('results');
          // response.render('/results');
        } else {
          alert('Failed to update blog post');
          console.log(response);
        }
    }
};


document
  .querySelector('#search-button')
  .addEventListener('click', ingredientSearchHandler);