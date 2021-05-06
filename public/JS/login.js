const loginFormHandler = async (event) => {
    event.preventDefault();
    
    const username = document.querySelector('.username').value.trim();
    const password = document.querySelector('.password').value.trim();
    console.log(username);
    console.log(password);
    console.log("I'm in login.js")
    if (username && password) {
        
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'},
        });
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
};


document
  .querySelector('#loginSubmit')
  .addEventListener('click', loginFormHandler);

