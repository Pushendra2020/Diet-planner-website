// document.addEventListener('DOMContentLoaded', function() {
//     function handleClick(event, hiddenInputId, value) {
//         event.preventDefault();
//         const buttons = event.target.parentNode.querySelectorAll('button');
//         buttons.forEach(btn => btn.style.backgroundColor = "");
//         event.target.style.backgroundColor = "green";
//         document.getElementById(hiddenInputId).value = value;
//     }
//     let male= document.querySelector(".male");
//     let female= document.querySelector(".female");
//     let weight_lose= document.querySelector(".weight_lose");
//     let weight_gain= document.querySelector(".weight_gain");
//     let ectomorph= document.querySelector(".ectomorph");
//     let mesomorph= document.querySelector(".mesomorph");
//     let endomorph= document.querySelector(".endomorph");
//     let veg= document.querySelector(".veg");
//     let nonveg= document.querySelector(".non_veg");



//     male.addEventListener('click', (event) => handleClick(event, 'gender', 'male'));
//     female.addEventListener('click', (event) => handleClick(event, 'gender', 'female'));
//     weight_lose.addEventListener('click', (event) => handleClick(event, 'goal', 'lose'));
//     weight_gain.addEventListener('click', (event) => handleClick(event, 'goal', 'gain'));
//     ectomorph.addEventListener('click', (event) => handleClick(event, 'bodyType', 'ectomorph'));
//     mesomorph.addEventListener('click', (event) => handleClick(event, 'bodyType', 'mesomorph'));
//     endomorph.addEventListener('click', (event) => handleClick(event, 'bodyType', 'endomorph'));
//     veg.addEventListener('click', (event) => handleClick(event, 'foodType', 'veg'));
//     nonveg.addEventListener('click', (event) => handleClick(event, 'foodType', 'non_veg'));


//     document.getElementById('healthForm').addEventListener('submit', function(event) {
//         const gender = document.getElementById('gender').value;
//         const goal = document.getElementById('goal').value;
//         const bodyType = document.getElementById('bodyType').value;
//         const foodType = document.getElementById('foodType').value;
//         const age = document.getElementById('age').value;
//         const height = document.getElementById('height').value;
//         const weight = document.getElementById('weight').value;
//         // const email = document.getElementById('email').value;


//         if (!gender || !goal || !bodyType || !foodType) {
//             alert('Please make sure to select an option for Gender, Goal, Body Type and Food Type.');
//             event.preventDefault();
//         } else {
//             // Store values in localStorage
//             localStorage.setItem('gender', gender);
//             localStorage.setItem('goal', goal);
//             localStorage.setItem('bodyType', bodyType);
//             localStorage.setItem('foodType', foodType);
//             localStorage.setItem('age', age);
//             localStorage.setItem('height', height);
//             localStorage.setItem('weight', weight);
//             // localStorage.setItem('email', email);
//         }
//     });
// });



// document.addEventListener('DOMContentLoaded', function() {
//     function handleClick(event, hiddenInputId, value) {
//         event.preventDefault();
//         const buttons = event.target.parentNode.querySelectorAll('button');
//         buttons.forEach(btn => btn.style.backgroundColor = "");
//         event.target.style.backgroundColor = "green";
//         document.getElementById(hiddenInputId).value = value;
//     }

//     let male = document.querySelector(".male");
//     let female = document.querySelector(".female");
//     let weight_lose = document.querySelector(".weight_lose");
//     let weight_gain = document.querySelector(".weight_gain");
//     let ectomorph = document.querySelector(".ectomorph");
//     let mesomorph = document.querySelector(".mesomorph");
//     let endomorph = document.querySelector(".endomorph");
//     let veg = document.querySelector(".veg");
//     let nonveg = document.querySelector(".non_veg");

//     male.addEventListener('click', (event) => handleClick(event, 'gender', 'male'));
//     female.addEventListener('click', (event) => handleClick(event, 'gender', 'female'));
//     weight_lose.addEventListener('click', (event) => handleClick(event, 'goal', 'lose'));
//     weight_gain.addEventListener('click', (event) => handleClick(event, 'goal', 'gain'));
//     ectomorph.addEventListener('click', (event) => handleClick(event, 'bodyType', 'ectomorph'));
//     mesomorph.addEventListener('click', (event) => handleClick(event, 'bodyType', 'mesomorph'));
//     endomorph.addEventListener('click', (event) => handleClick(event, 'bodyType', 'endomorph'));
//     veg.addEventListener('click', (event) => handleClick(event, 'foodType', 'veg'));
//     nonveg.addEventListener('click', (event) => handleClick(event, 'foodType', 'non_veg'));

//     document.getElementById('healthForm').addEventListener('submit', function(event) {
//         const gender = document.getElementById('gender').value;
//         const goal = document.getElementById('goal').value;
//         const bodyType = document.getElementById('bodyType').value;
//         const foodType = document.getElementById('foodType').value;
//         const age = document.getElementById('age').value;
//        const height = document.getElementById('height').value;
//        const weight = document.getElementById('weight').value;

//         if (!gender || !goal || !bodyType || !foodType) {
//             alert('Please make sure to select an option for Gender, Goal, Body Type, and Food Type.');
//             event.preventDefault();
//         } else {

//                          localStorage.setItem('gender', gender);
//                          localStorage.setItem('goal', goal);
//                          localStorage.setItem('bodyType', bodyType);
//                          localStorage.setItem('foodType', foodType);
//                          localStorage.setItem('age', age);
//                          localStorage.setItem('height', height);
//                          localStorage.setItem('weight', weight);

//                   }
//     });
// });




// document.addEventListener('DOMContentLoaded', function() {
//     function handleClick(event, hiddenInputId, value) {
//         event.preventDefault();
//         const buttons = event.target.parentNode.querySelectorAll('button');
//         buttons.forEach(btn => btn.style.backgroundColor = "");
//         event.target.style.backgroundColor = "green";
//         document.getElementById(hiddenInputId).value = value;
//     }

//     let male = document.querySelector(".male");
//     let female = document.querySelector(".female");
//     let weight_lose = document.querySelector(".weight_lose");
//     let weight_gain = document.querySelector(".weight_gain");
//     let ectomorph = document.querySelector(".ectomorph");
//     let mesomorph = document.querySelector(".mesomorph");
//     let endomorph = document.querySelector(".endomorph");
//     let veg = document.querySelector(".veg");
//     let nonveg = document.querySelector(".non_veg");

//     male.addEventListener('click', (event) => handleClick(event, 'gender', 'male'));
//     female.addEventListener('click', (event) => handleClick(event, 'gender', 'female'));
//     weight_lose.addEventListener('click', (event) => handleClick(event, 'goal', 'lose'));
//     weight_gain.addEventListener('click', (event) => handleClick(event, 'goal', 'gain'));
//     ectomorph.addEventListener('click', (event) => handleClick(event, 'bodyType', 'ectomorph'));
//     mesomorph.addEventListener('click', (event) => handleClick(event, 'bodyType', 'mesomorph'));
//     endomorph.addEventListener('click', (event) => handleClick(event, 'bodyType', 'endomorph'));
//     veg.addEventListener('click', (event) => handleClick(event, 'foodType', 'veg'));
//     nonveg.addEventListener('click', (event) => handleClick(event, 'foodType', 'non_veg'));

//     document.getElementById('healthForm').addEventListener('submit', function(event) {
//         event.preventDefault(); // Prevent the form from submitting normally
//         const user_id = document.getElementById('user_id').value;
//         const gender = document.getElementById('gender').value;
//         const goal = document.getElementById('goal').value;
//         const bodyType = document.getElementById('bodyType').value;
//         const foodType = document.getElementById('foodType').value;
//         const age = document.getElementById('age').value;
//         const height = document.getElementById('height').value;
//         const weight = document.getElementById('weight').value;

//         if (!gender || !goal || !bodyType || !foodType) {
//             alert('Please make sure to select an option for Gender, Goal, Body Type, and Food Type.');
//             return;
//         }

//         // Send data to the server
//         fetch('/re', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 user_id,
//                 gender,
//                 goal,
//                 bodyType,
//                 foodType,
//                 age,
//                 height,
//                 weight
//             })
//         }).then(response => {
//             if (response.ok) {
//                 window.location.href = '/dash.html'; // Redirect to the dashboard
//             } else {
//                 alert('Failed to save data. Please try again.');
//             }
//         }).catch(error => {
//             console.error('Error:', error);
//             alert('Failed to save data. Please try again.');
//         });
//     });
// });






// document.addEventListener('DOMContentLoaded', function() {
//     function handleClick(event, hiddenInputId, value) {
//         event.preventDefault();
//         const buttons = event.target.parentNode.querySelectorAll('button');
//         buttons.forEach(btn => btn.style.backgroundColor = "");
//         event.target.style.backgroundColor = "green";
//         document.getElementById(hiddenInputId).value = value;
//     }

//     let male = document.querySelector(".male");
//     let female = document.querySelector(".female");
//     let weight_lose = document.querySelector(".weight_lose");
//     let weight_gain = document.querySelector(".weight_gain");
//     let ectomorph = document.querySelector(".ectomorph");
//     let mesomorph = document.querySelector(".mesomorph");
//     let endomorph = document.querySelector(".endomorph");
//     let veg = document.querySelector(".veg");
//     let nonveg = document.querySelector(".non_veg");

//     male.addEventListener('click', (event) => handleClick(event, 'gender', 'male'));
//     female.addEventListener('click', (event) => handleClick(event, 'gender', 'female'));
//     weight_lose.addEventListener('click', (event) => handleClick(event, 'goal', 'lose'));
//     weight_gain.addEventListener('click', (event) => handleClick(event, 'goal', 'gain'));
//     ectomorph.addEventListener('click', (event) => handleClick(event, 'bodyType', 'ectomorph'));
//     mesomorph.addEventListener('click', (event) => handleClick(event, 'bodyType', 'mesomorph'));
//     endomorph.addEventListener('click', (event) => handleClick(event, 'bodyType', 'endomorph'));
//     veg.addEventListener('click', (event) => handleClick(event, 'foodType', 'veg'));
//     nonveg.addEventListener('click', (event) => handleClick(event, 'foodType', 'non_veg'));

//     document.getElementById('healthForm').addEventListener('submit', function(event) {
//         const gender = document.getElementById('gender').value;
//         const goal = document.getElementById('goal').value;
//         const bodyType = document.getElementById('bodyType').value;
//         const foodType = document.getElementById('foodType').value;
//         const age = document.getElementById('age').value;
//         const height = document.getElementById('height').value;
//         const weight = document.getElementById('weight').value;
//         const user_id = document.getElementById('user_id').value;

//         if (!gender || !goal || !bodyType || !foodType) {
//             alert('Please make sure to select an option for Gender, Goal, Body Type, and Food Type.');
//             event.preventDefault();
//         } else {
//             localStorage.setItem('gender', gender);
//             localStorage.setItem('goal', goal);
//             localStorage.setItem('bodyType', bodyType);
//             localStorage.setItem('foodType', foodType);
//             localStorage.setItem('age', age);
//             localStorage.setItem('height', height);
//             localStorage.setItem('weight', weight);
//             localStorage.setItem('user_id', user_id);
//         }
//     });
// });



document.addEventListener('DOMContentLoaded', function () {



    function handleClick(event, hiddenInputId, value) {
        event.preventDefault();
        const buttons = event.target.parentNode.querySelectorAll('button');
        buttons.forEach(btn => btn.style.backgroundColor = "");
        event.target.style.backgroundColor = "green";
        document.getElementById(hiddenInputId).value = value;
    }
    //      let i=0;
    //    i = i + 1;

    //     let user_id = document.querySelector("#user_id");

    //     user_id.value = localStorage.setItem('i',i); 
    //  console.log( user_id.value);


    let male = document.querySelector(".male");
    let female = document.querySelector(".female");
    let weight_lose = document.querySelector(".weight_lose");
    let weight_gain = document.querySelector(".weight_gain");
    let ectomorph = document.querySelector(".ectomorph");
    let mesomorph = document.querySelector(".mesomorph");
    let endomorph = document.querySelector(".endomorph");
    let veg = document.querySelector(".veg");
    let nonveg = document.querySelector(".non_veg");

    male.addEventListener('click', (event) => handleClick(event, 'gender', 'male'));
    female.addEventListener('click', (event) => handleClick(event, 'gender', 'female'));
    weight_lose.addEventListener('click', (event) => handleClick(event, 'goal', 'lose'));
    weight_gain.addEventListener('click', (event) => handleClick(event, 'goal', 'gain'));
    ectomorph.addEventListener('click', (event) => handleClick(event, 'bodyType', 'ectomorph'));
    mesomorph.addEventListener('click', (event) => handleClick(event, 'bodyType', 'mesomorph'));
    endomorph.addEventListener('click', (event) => handleClick(event, 'bodyType', 'endomorph'));
    veg.addEventListener('click', (event) => handleClick(event, 'foodType', 'veg'));
    nonveg.addEventListener('click', (event) => handleClick(event, 'foodType', 'non_veg'));

    document.getElementById('healthForm').addEventListener('submit', function (event) {

        // const user_id = document.getElementById('user_id').value;
        let gender = document.getElementById('gender').value;
        let goal = document.getElementById('goal').value;
        let bodyType = document.getElementById('bodyType').value;
        let foodType = document.getElementById('foodType').value;
        let age = document.getElementById('age').value;
        let height = document.getElementById('height').value;
        let weight = document.getElementById('weight').value;
        // let username = document.getElementById('username').value;
        // let password = document.getElementById('password').value;

        // localStorage.setItem('user_id',user_id);



        if (!gender || !goal || !bodyType || !foodType) {
            alert('Please make sure to select an option for Gender, Goal, Body Type, and Food Type.');
            event.preventDefault();
        } else {
            localStorage.setItem('gender', gender);
            localStorage.setItem('goal', goal);
            localStorage.setItem('bodyType', bodyType);
            localStorage.setItem('foodType', foodType);
            localStorage.setItem('height', height);
            localStorage.setItem('weight', weight);
            localStorage.setItem('age', age);
          
            // console.log( gender.value);
            const user = {
                user_id,
                username,
                password,
                gender,
                goal,
                bodyType,
                foodType,
                age,
                height,
                weight
            };

            fetch('/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(response => response.json())
                .then(data => {
                    if (data.error) {
                        alert(data.error);
                    } else {
                        alert('Account created successfully');
                        document.getElementById('user_id').value = data.userId;
                        window.location.href = 'dash.html';
                    }
                })
                .catch(error => console.error('Error:', error));
        }
    });
});
