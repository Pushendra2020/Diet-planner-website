document.addEventListener('DOMContentLoaded', () => {
    let gender = localStorage.getItem('gender');
    let goal = localStorage.getItem('goal');
    let bodyType = localStorage.getItem('bodyType');
    let foodType = localStorage.getItem('foodType');
    let age = localStorage.getItem('age');
    let height = localStorage.getItem('height');
    let weight = localStorage.getItem('weight');

    if (age >= 15 && age <= 25 && height >= 140 && height <= 150
        && weight >= 25 && weight <= 60 && gender === 'male' && goal === 'lose' && bodyType === 'ectomorph' && foodType === 'veg') {
        fetch('/planbreak1')
            .then(response => response.json())
            .then(data => {
                const breakfast = document.getElementById('breakfast');
                const head = document.createElement('div');
                head.innerHTML = `<h2>${"Break fast"}</h2>`;
                breakfast.appendChild(head);
                const table = document.getElementById('planTable');
                data.forEach(item => {
                    const row = document.createElement('div');
                    row.innerHTML = `
                      <p>${item.id}</p>
                      <p>${item.name_food}</p>
                      <p>${item.calories}</p>
                      <p>${item.protein}</p>
                      <p>${item.carbs}</p>
                      <p>${item.fats}</p>
                  `;
                    //   row.style.display = 'flex';
                    //   row.style.justifyContent= 'space-between';
                    row.classList.add('break_con1');
                    table.appendChild(row);
                });
            })
            .catch(error => console.error('Error fetching data:', error));


        fetch('/planlunch1')
            .then(response => response.json())
            .then(data => {
                const lunch = document.getElementById('lunch');
                const head = document.createElement('div');
                head.innerHTML = `<h2>${"Lunch"}</h2>`;
                lunch.appendChild(head);
                const table = document.getElementById('planTable1');
                data.forEach(item => {
                    const row = document.createElement('div');
                    row.innerHTML = `  
                  <p>${item.id}</p>
                  <p>${item.name_food}</p>
                  <p>${item.calories}</p>
                  <p>${item.protein}</p>
                  <p>${item.carbs}</p>
                  <p>${item.fats}</p>
                  `;
                    row.classList.add('break_con1');
                    table.appendChild(row);
                });
            })
            .catch(error => console.error('Error fetching data:', error));

        fetch('/plandinner1')
            .then(response => response.json())
            .then(data => {
                const lunch = document.getElementById('dinner');
                const head = document.createElement('div');
                head.innerHTML = `<h2>${"Dinner"}</h2>`;
                lunch.appendChild(head);
                const table = document.getElementById('planTable2');
                data.forEach(item => {
                    const row = document.createElement('div');
                    row.innerHTML = `  
                  <p>${item.id}</p>
                  <p>${item.name_food}</p>
                  <p>${item.calories}</p>
                  <p>${item.protein}</p>
                  <p>${item.carbs}</p>
                  <p>${item.fats}</p>
                  `;
                    row.classList.add('break_con1');
                    table.appendChild(row);
                });
            })
            .catch(error => console.error('Error fetching data:', error));
    }
    else {
        console.log('No matching diet plan found.');
    }

    // 2

    if (age >= 26 && age <= 35 && height >= 151 && height <= 160
        && weight >= 61 && weight <= 90 && gender === 'female' && goal === 'gain' && bodyType === 'mesomorph ' && foodType === 'non_veg') {
        fetch('/planbreak2')
            .then(response => response.json())
            .then(data => {
                const breakfast = document.getElementById('breakfast');
                const head = document.createElement('div');
                head.innerHTML = `<h2>${"Break fast"}</h2>`;
                breakfast.appendChild(head);
                const table = document.getElementById('planTable');
                data.forEach(item => {
                    const row = document.createElement('div');
                    row.innerHTML = `
                      <p>${item.id}</p>
                      <p>${item.name_food}</p>
                      <p>${item.calories}</p>
                      <p>${item.protein}</p>
                      <p>${item.carbs}</p>
                      <p>${item.fats}</p>
                  `;
                    //   row.style.display = 'flex';
                    //   row.style.justifyContent= 'space-between';
                    row.classList.add('break_con1');
                    table.appendChild(row);
                });
            })
            .catch(error => console.error('Error fetching data:', error));


        fetch('/planlunch2')
            .then(response => response.json())
            .then(data => {
                const lunch = document.getElementById('lunch');
                const head = document.createElement('div');
                head.innerHTML = `<h2>${"Lunch"}</h2>`;
                lunch.appendChild(head);
                const table = document.getElementById('planTable1');
                data.forEach(item => {
                    const row = document.createElement('div');
                    row.innerHTML = `  
                  <p>${item.id}</p>
                  <p>${item.name_food}</p>
                  <p>${item.calories}</p>
                  <p>${item.protein}</p>
                  <p>${item.carbs}</p>
                  <p>${item.fats}</p>
                  `;
                    row.classList.add('break_con1');
                    table.appendChild(row);
                });
            })
            .catch(error => console.error('Error fetching data:', error));

        fetch('/plandinner2')
            .then(response => response.json())
            .then(data => {
                const lunch = document.getElementById('dinner');
                const head = document.createElement('div');
                head.innerHTML = `<h2>${"Dinner"}</h2>`;
                lunch.appendChild(head);
                const table = document.getElementById('planTable2');
                data.forEach(item => {
                    const row = document.createElement('div');
                    row.innerHTML = `  
                  <p>${item.id}</p>
                  <p>${item.name_food}</p>
                  <p>${item.calories}</p>
                  <p>${item.protein}</p>
                  <p>${item.carbs}</p>
                  <p>${item.fats}</p>
                  `;
                    row.classList.add('break_con1');
                    table.appendChild(row);
                });
            })
            .catch(error => console.error('Error fetching data:', error));

        // 3
        if (age >= 36 && age <= 50 && height >= 161 && height <= 170
            && weight >= 91 && weight <= 120 && gender === 'male' && goal === 'lose' && bodyType === 'endomorph ' && foodType === 'veg') {
            fetch('/planbreak3')
                .then(response => response.json())
                .then(data => {
                    const breakfast = document.getElementById('breakfast');
                    const head = document.createElement('div');
                    head.innerHTML = `<h2>${"Break fast"}</h2>`;
                    breakfast.appendChild(head);
                    const table = document.getElementById('planTable');
                    data.forEach(item => {
                        const row = document.createElement('div');
                        row.innerHTML = `
                              <p>${item.id}</p>
                              <p>${item.name_food}</p>
                              <p>${item.calories}</p>
                              <p>${item.protein}</p>
                              <p>${item.carbs}</p>
                              <p>${item.fats}</p>
                          `;
                        //   row.style.display = 'flex';
                        //   row.style.justifyContent= 'space-between';
                        row.classList.add('break_con1');
                        table.appendChild(row);
                    });
                })
                .catch(error => console.error('Error fetching data:', error));


            fetch('/planlunch3')
                .then(response => response.json())
                .then(data => {
                    const lunch = document.getElementById('lunch');
                    const head = document.createElement('div');
                    head.innerHTML = `<h2>${"Lunch"}</h2>`;
                    lunch.appendChild(head);
                    const table = document.getElementById('planTable1');
                    data.forEach(item => {
                        const row = document.createElement('div');
                        row.innerHTML = `  
                          <p>${item.id}</p>
                          <p>${item.name_food}</p>
                          <p>${item.calories}</p>
                          <p>${item.protein}</p>
                          <p>${item.carbs}</p>
                          <p>${item.fats}</p>
                          `;
                        row.classList.add('break_con1');
                        table.appendChild(row);
                    });
                })
                .catch(error => console.error('Error fetching data:', error));

            fetch('/plandinner3')
                .then(response => response.json())
                .then(data => {
                    const lunch = document.getElementById('dinner');
                    const head = document.createElement('div');
                    head.innerHTML = `<h2>${"Dinner"}</h2>`;
                    lunch.appendChild(head);
                    const table = document.getElementById('planTable2');
                    data.forEach(item => {
                        const row = document.createElement('div');
                        row.innerHTML = `  
                          <p>${item.id}</p>
                          <p>${item.name_food}</p>
                          <p>${item.calories}</p>
                          <p>${item.protein}</p>
                          <p>${item.carbs}</p>
                          <p>${item.fats}</p>
                          `;
                        row.classList.add('break_con1');
                        table.appendChild(row);
                    });
                })
                .catch(error => console.error('Error fetching data:', error));

        }
        else {
            console.log('No matching diet plan found.');
        }
    }
});
