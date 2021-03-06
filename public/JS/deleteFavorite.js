const deleteFavoriteHandler = async (event) => {
    event.preventDefault();

    const recipe_id = event.target.getAttribute('data-id');
  
    const response = await fetch(`/api/recipe/delete/${recipe_id}`, {
        method: 'DELETE',
    });

    if (response.ok) {
    document.location.replace('/api/recipe/favorites');
    } else {
    alert('Failed to delete.');
    console.log(response);
    }
}

document
    .querySelector('#delete-button')
    .addEventListener('click', deleteFavoriteHandler);