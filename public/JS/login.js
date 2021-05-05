const loginFormHandler = async (event) => {
    event.preventDefault();
    
    const username = document.querySelector('.username').value.trim();
    const password = document.querySelector('.password').value.trim();
    console.log(username);
    console.log(password);
    if (username && password) {
        
        const response = await fetch('./api/user/login', {
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

// const signupFormHandler = async (event) => {
//     event.preventDefault();

//     const username = document.querySelector('#username-signup').value.trim();
//     const password = document.querySelector('#password-signup').value.trim();

//     if (username && password) {
//         const response = await fetch('/api/user-routes/XXXX', {
//             method: 'POST',
//             body: JSON.stringify({username, password}),
//             headers: {'Content-Type': 'application/json'},
//         });
//         if (response.ok) {
//             document.location.replace('XXXX');
//         } else {
//             alert(response.statusText);
//         }
//     }
// };

document
  .querySelector('#submit')
  .addEventListener('click', loginFormHandler);

// document
//   .querySelector('.signup-form')
//   .addEventListener('.submit', signupFormHandler);
 