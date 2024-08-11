
// const container = document.getElementById('container');
// const Btn = document.getElementById('register');
// const login = document.getElementById('login');

// Btn.addEventListener('click', () => {
//     container.classList.add("active");
// });

// login.addEventListener('click', () => {
//     container.classList.remove("active");
// });




// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

//     fetch('/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username: username, password: password })
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.error) {
//             console.error('Login failed:', data.error);
//         } else {
//             localStorage.setItem('gender', data.gender);
//             localStorage.setItem('goal', data.goal);
//             localStorage.setItem('bodyType', data.bodyType);
//             localStorage.setItem('foodType', data.foodType);
//             localStorage.setItem('age', data.age);
//             localStorage.setItem('height', data.height);
//             localStorage.setItem('weight', data.weight);

//             // Redirect to the dashboard or another page
//             window.location.href = '/dash.html';
//         }
//     })
//     .catch(error => console.error('Error during login:', error));
// });



document.addEventListener('DOMContentLoaded', function() {
    
const container = document.getElementById('container');
const Btn = document.getElementById('register');
const login = document.getElementById('login');

Btn.addEventListener('click', () => {
    container.classList.add("active");
});

login.addEventListener('click', () => {
    container.classList.remove("active");
});

    document.getElementById('loginForm').addEventListener('click', function(event) {
        event.preventDefault();

        console.log("works");
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const loginInfo = { username, password };

        fetch('/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginInfo)
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert(data.error);
            } else {
                localStorage.setItem('userId', data.userId);
                localStorage.setItem('gender', data.gender);
                localStorage.setItem('goal', data.goal);
                localStorage.setItem('bodyType', data.bodyType);
                localStorage.setItem('foodType', data.foodType);
                localStorage.setItem('age', data.age);
                localStorage.setItem('height', data.height);
                localStorage.setItem('weight', data.weight);
                window.location.href = '/dash.html';
            }
        })
        .catch(error => console.error('Error:', error));
    });
});


// document.getElementById('loginForm').addEventListener('submit', function (event) {
//     event.preventDefault();

//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

//     fetch('/', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ username, password })
//     })
//         .then(response => response.json())
//         .then(data => {
//             if (data.error) {
//                 alert(data.error);
//             } else {
//                 localStorage.setItem('userId', data.userId);
//                 localStorage.setItem('gender', data.gender);
//                 localStorage.setItem('goal', data.goal);
//                 localStorage.setItem('bodyType', data.bodyType);
//                 localStorage.setItem('foodType', data.foodType);
//                 localStorage.setItem('age', data.age);
//                 localStorage.setItem('height', data.height);
//                 localStorage.setItem('weight', data.weight);
//                 window.location.href ='dash.html';
//             }
//         })
//         .catch(error => console.error('Error:', error));
// });



// document.getElementById('loginForm').addEventListener('submit', function (event) {
//     event.preventDefault();

//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

//     console.log('Submitting login form', { username, password });

//     fetch('/', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ username, password })
//     })
//     .then(response => {
//         console.log('Server response', response);
//         return response.json();
//     })
//     .then(data => {
//         console.log('Parsed response data', data);
//         if (data.error) {
//             alert(data.error);
//         } else {
//             console.log("It works");
//             localStorage.setItem('userId', data.userId);
//             localStorage.setItem('gender', data.gender);
//             localStorage.setItem('goal', data.goal);
//             localStorage.setItem('bodyType', data.bodyType);
//             localStorage.setItem('foodType', data.foodType);
//             localStorage.setItem('age', data.age);
//             localStorage.setItem('height', data.height);
//             localStorage.setItem('weight', data.weight);
//             window.location.href = 'dash.html';
//         }
//     })
//     .catch(error => console.error('Error:', error));
// });
