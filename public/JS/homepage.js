const updateBlogPostHandler = async (event) => {
    event.preventDefault();

    var ingredientOne = document.querySelector('#ingredient-one').textContent;
    var ingredientTwo = document.querySelector('#ingredient-two').textContent;
    var ingredientThree = document.querySelector('#ingredient-three').textContent;
    var ingredients;

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
          body: JSON.stringify({ ingredients }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (response.ok) {
          document.location.replace('/searchresults');
        } else {
          alert('Failed to update blog post');
        }
    }
};


document
  .querySelector('#search-button')
  .addEventListener('click', updateBlogPostHandler);