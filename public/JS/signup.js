const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('.username').value.trim();
    const password = document.querySelector('.password').value.trim();

    if (username && password) {
        const response = await fetch('/api/user/signup', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'},
        });
        if (response.ok) {
            document.location.replace('/login');
        } else {
            alert(response.statusText);
        }
    }
};

document
  .querySelector('#signSubmit')
  .addEventListener('click', signupFormHandler);
 