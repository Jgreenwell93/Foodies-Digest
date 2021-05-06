const ingredientSearchHandler = async (event) => {
    event.preventDefault();

    var ingredientOne = document.querySelector('#input-ingredient-one').value;
    var ingredientTwo = document.querySelector('#input-ingredient-two').value;
    var ingredientThree = document.querySelector('#input-ingredient-three').value;
    var ingredients = [];
    
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
        const response = await fetch('/search', {
          method: 'GET',
          body: JSON.stringify({ ingredientOne }),
          headers: {
            'Content-Type': 'application/json',
          },
        });

    
        if (response.ok) {
          // document.location.replace('results');
          // response.render('/results');
        } else {
          alert('Failed to update blog post');
        }
    }
};


document
  .querySelector('#search-button')
  .addEventListener('click', ingredientSearchHandler);