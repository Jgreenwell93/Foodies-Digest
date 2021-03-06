const saveFavoriteButtonHandler = async (event) => {
    event.preventDefault();
  
    var title = document.querySelector("#recipeTitle").textContent;
    var fullrecipeimg = document.querySelector("#fullrecipeimg").src;
    const recipe_id = event.target.getAttribute('data-id');

    console.log('title = ' + title);
    console.log('recipe_id = ' + recipe_id);
    console.log('fullrecipeimg = ' + fullrecipeimg);
    
    alert("I'm in saveFavorite.js");
  
       const response = await fetch('/api/recipe/', {
        method: 'POST',
        body: JSON.stringify({ title, recipe_id, fullrecipeimg }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        // document.location.replace('/favorites');
      } else {
        alert('Failed to create new blog post');
      }
   };
  
    
  document
      .querySelector('#save-favorite-button')
      .addEventListener('click', saveFavoriteButtonHandler);
  