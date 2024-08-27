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
document.getElementById('registerForm').addEventListener('submit', function(event) {
    let namee = document.getElementById('Name').value;
    localStorage.setItem('Name', namee);
});


    document.getElementById('loginForm').addEventListener('click', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        let namee = document.getElementById('Name').value;
       
       
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

