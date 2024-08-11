let wight = document.getElementById("we");
let height = document.getElementById("he");
let sum = document.getElementById("sum");
let age = document.getElementById("Age");
let gend = document.getElementById("gender");
let male = document.getElementById("male");
let female = document.getElementById("female");
let pro = document.querySelector(".ans1");
let noob = document.querySelector(".ans2");
let hide = document.querySelector(".hide");
let searchButton = document.querySelector("#searchButton");
let temp_hide = document.querySelector(".temp_hide");
let bmi;
if (male.value == male) {
    gend = 0;
} else {
    gend = 1;
}
sum.addEventListener('click', () => {
    pro.classList.remove("hide");
    noob.classList.remove("hide");
    let wightv = parseFloat(wight.value);
    let heightv = parseFloat(height.value);
    let agev = parseInt(age.value);

    bmi = wightv / (heightv * heightv);
    let re = Math.ceil(bmi * 100) / 100;
    pro.innerText = `The Body Mass Index is ${re}`;
    if (gend === 0) {
        let bdf_male = ((1.20 * bmi) + (0.23 * agev) - 16.2);
        let se = Math.ceil(bdf_male * 100) / 100;
        noob.innerText = `The Body Fat is ${se}`;
    }
    if (gend === 1) {
        let bdf_female = ((1.20 * bmi) + (0.23 * agev) - 5.4);
        let se = Math.ceil(bdf_female * 100) / 100;
        noob.innerText = `The Body Fat is ${se}`;
    }
})

searchButton.addEventListener('click', () =>{
  temp_hide.classList.remove("temp_hide");
})


document.addEventListener('DOMContentLoaded', () => {
  const searchButton = document.getElementById('searchButton');
  const searchInput = document.getElementById('searchInput');

  searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
      fetch(`/users?name=${query}`, {
        method: 'GET'
      })
        .then(response => response.json())
        .then(data => {
          const tbody = document.querySelector('#foodTable tbody');
          tbody.innerHTML = ''; // Clear existing data
          data.forEach(item => {
            const row = document.createElement('tr');
            
            const idCell = document.createElement('td');
            idCell.textContent = item.id;
            row.appendChild(idCell);
            
            const nameCell = document.createElement('td');
            nameCell.textContent = item.name_food;
            row.appendChild(nameCell);
            
            const caloriesCell = document.createElement('td');
            caloriesCell.textContent = item.calories;
            row.appendChild(caloriesCell);
            
            const proteinCell = document.createElement('td');
            proteinCell.textContent = item.protein;
            row.appendChild(proteinCell);
            
            const carbsCell = document.createElement('td');
            carbsCell.textContent = item.carbs;
            row.appendChild(carbsCell);
            
            const fatsCell = document.createElement('td');
            fatsCell.textContent = item.fats;
            row.appendChild(fatsCell);
            
            tbody.appendChild(row);
          });
        })
        .catch(error => console.error('Error fetching data:', error));
    }
  });
});
