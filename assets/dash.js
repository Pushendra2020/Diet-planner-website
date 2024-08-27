document.addEventListener('DOMContentLoaded', function () {
    let gender = localStorage.getItem('gender');
    let goal = localStorage.getItem('goal');
    let bodyType = localStorage.getItem('bodyType');
    let foodType = localStorage.getItem('foodType');
    let age = Number(localStorage.getItem('age'));  // Convert to number
    let height = Number(localStorage.getItem('height'));  // Convert to number
    let weight = Number(localStorage.getItem('weight'));  // Convert to number
   
    if (age >= 15 && age <= 25 && height >= 140 && height <= 150
        && weight >= 25 && weight <= 60 && gender === 'male' && goal === 'lose' && bodyType === 'ectomorph' && foodType === 'veg') {

        fetch('/planbreak1')
            .then(response => response.json())
            .then(data => {
                const breakfast = document.getElementById('breakfast');
                const heading = document.getElementById('heading');
                const para = document.createElement('div');
                para.innerHTML = `<h2>${namee}</h2>`;
                heading.appendChild(para);
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

    // 2
    else if (age >= 26 && age <= 35 && height >= 151 && height <= 160
        && weight >= 61 && weight <= 90 && gender === 'female' && goal === 'gain' && bodyType === 'mesomorph' && foodType === 'non_veg') {

        fetch('/planbreak2')
            .then(response => response.json())
            .then(data => {
                const heading = document.getElementById('heading');
                const para = document.createElement('div');
                para.innerHTML = `<h2>${namee}</h2>`;
                heading.appendChild(para);
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
    }

    // 3
    else if (age >= 36 && age <= 50 && height >= 161 && height <= 170
        && weight >= 91 && weight <= 120 && gender === 'male' && goal === 'lose' && bodyType === 'endomorph' && foodType === 'veg') {

        fetch('/planbreak3')
            .then(response => response.json())
            .then(data => {
                const heading = document.getElementById('heading');
                const para = document.createElement('div');
                para.innerHTML = `<h2>${namee}</h2>`;
                heading.appendChild(para);
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

    // Condition 4
    else if (age >= 51 && age <= 65 && height >= 171 && height <= 180
        && weight >= 121 && weight <= 160 && gender === 'female' && goal === 'gain' && bodyType === 'ectomorph' && foodType === 'non_veg') {


        fetch('/planbreak4')
            .then(response => response.json())
            .then(data => {
                const heading = document.getElementById('heading');
                const para = document.createElement('div');
                para.innerHTML = `<h2>${namee}</h2>`;
                heading.appendChild(para);
                const breakfast = document.getElementById('breakfast');
                breakfast.innerHTML = ''; // Clear previous content
                const head = document.createElement('div');
                head.innerHTML = `<h2>Breakfast</h2>`;
                breakfast.appendChild(head);
                const table = document.getElementById('planTable');
                table.innerHTML = ''; // Clear previous content
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

        // Fetch lunch
        fetch('/planlunch4')
            .then(response => response.json())
            .then(data => {
                const lunch = document.getElementById('lunch');
                lunch.innerHTML = ''; // Clear previous content
                const head = document.createElement('div');
                head.innerHTML = `<h2>Lunch</h2>`;
                lunch.appendChild(head);
                const table = document.getElementById('planTable1');
                table.innerHTML = ''; // Clear previous content
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

        // Fetch dinner
        fetch('/plandinner4')
            .then(response => response.json())
            .then(data => {
                const dinner = document.getElementById('dinner');
                dinner.innerHTML = ''; // Clear previous content
                const head = document.createElement('div');
                head.innerHTML = `<h2>Dinner</h2>`;
                dinner.appendChild(head);
                const table = document.getElementById('planTable2');
                table.innerHTML = ''; // Clear previous content
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
    // Condition 5
    else if (age >= 66 && age <= 85 && height >= 181 && height <= 190
        && weight >= 161 && weight <= 200 && gender === 'male' && goal === 'lose' && bodyType === 'mesomorph' && foodType === 'veg') {


        fetch('/planbreak5')
            .then(response => response.json())
            .then(data => {
                const heading = document.getElementById('heading');
                const para = document.createElement('div');
                para.innerHTML = `<h2>${namee}</h2>`;
                heading.appendChild(para);
                const breakfast = document.getElementById('breakfast');
                breakfast.innerHTML = ''; // Clear previous content
                const head = document.createElement('div');
                head.innerHTML = `<h2>Breakfast</h2>`;
                breakfast.appendChild(head);
                const table = document.getElementById('planTable');
                table.innerHTML = ''; // Clear previous content
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

        // Fetch lunch
        fetch('/planlunch5')
            .then(response => response.json())
            .then(data => {
                const lunch = document.getElementById('lunch');
                lunch.innerHTML = ''; // Clear previous content
                const head = document.createElement('div');
                head.innerHTML = `<h2>Lunch</h2>`;
                lunch.appendChild(head);
                const table = document.getElementById('planTable1');
                table.innerHTML = ''; // Clear previous content
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

        // Fetch dinner
        fetch('/plandinner5')
            .then(response => response.json())
            .then(data => {
                const dinner = document.getElementById('dinner');
                dinner.innerHTML = ''; // Clear previous content
                const head = document.createElement('div');
                head.innerHTML = `<h2>Dinner</h2>`;
                dinner.appendChild(head);
                const table = document.getElementById('planTable2');
                table.innerHTML = ''; // Clear previous content
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


    // Condition 6
    else if (age >= 36 && age <= 50 && height >= 140 && height <= 150
        && weight >= 61 && weight <= 90 && gender === 'female' && goal === 'gain' && bodyType === 'endomorph' && foodType === 'non_veg') {


        fetch('/planbreak6')
            .then(response => response.json())
            .then(data => {
                const heading = document.getElementById('heading');
                const para = document.createElement('div');
                para.innerHTML = `<h2>${namee}</h2>`;
                heading.appendChild(para);
                const breakfast = document.getElementById('breakfast');
                breakfast.innerHTML = ''; // Clear previous content
                const head = document.createElement('div');
                head.innerHTML = `<h2>Breakfast</h2>`;
                breakfast.appendChild(head);
                const table = document.getElementById('planTable');
                table.innerHTML = ''; // Clear previous content
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

        // Fetch lunch
        fetch('/planlunch6')
            .then(response => response.json())
            .then(data => {
                const lunch = document.getElementById('lunch');
                lunch.innerHTML = ''; // Clear previous content
                const head = document.createElement('div');
                head.innerHTML = `<h2>Lunch</h2>`;
                lunch.appendChild(head);
                const table = document.getElementById('planTable1');
                table.innerHTML = ''; // Clear previous content
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

        // Fetch dinner
        fetch('/plandinner6')
            .then(response => response.json())
            .then(data => {
                const dinner = document.getElementById('dinner');
                dinner.innerHTML = ''; // Clear previous content
                const head = document.createElement('div');
                head.innerHTML = `<h2>Dinner</h2>`;
                dinner.appendChild(head);
                const table = document.getElementById('planTable2');
                table.innerHTML = ''; // Clear previous content
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
    // Condition 7
    else if (age >= 51 && age <= 65 && height >= 151 && height <= 160
        && weight >= 91 && weight <= 120 && gender === 'male' && goal === 'lose' && bodyType === 'ectomorph' && foodType === 'veg') {


        fetch('/planbreak7')
            .then(response => response.json())
            .then(data => {
                const heading = document.getElementById('heading');
                const para = document.createElement('div');
                para.innerHTML = `<h2>${namee}</h2>`;
                heading.appendChild(para);
                const breakfast = document.getElementById('breakfast');
                breakfast.innerHTML = ''; // Clear previous content
                const head = document.createElement('div');
                head.innerHTML = `<h2>Breakfast</h2>`;
                breakfast.appendChild(head);
                const table = document.getElementById('planTable');
                table.innerHTML = ''; // Clear previous content
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

        // Fetch lunch
        fetch('/planlunch7')
            .then(response => response.json())
            .then(data => {
                const lunch = document.getElementById('lunch');
                lunch.innerHTML = ''; // Clear previous content
                const head = document.createElement('div');
                head.innerHTML = `<h2>Lunch</h2>`;
                lunch.appendChild(head);
                const table = document.getElementById('planTable1');
                table.innerHTML = ''; // Clear previous content
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

        // Fetch dinner
        fetch('/plandinner7')
            .then(response => response.json())
            .then(data => {
                const dinner = document.getElementById('dinner');
                dinner.innerHTML = ''; // Clear previous content
                const head = document.createElement('div');
                head.innerHTML = `<h2>Dinner</h2>`;
                dinner.appendChild(head);
                const table = document.getElementById('planTable2');
                table.innerHTML = ''; // Clear previous content
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
    // Condition 8
    else if (age >= 66 && age <= 85 && height >= 161 && height <= 170
        && weight >= 121 && weight <= 160 && gender === 'female' && goal === 'gain' && bodyType === 'mesomorph' && foodType === 'non_veg') {


        fetch('/planbreak8')
            .then(response => response.json())
            .then(data => {
                const heading = document.getElementById('heading');
                const para = document.createElement('div');
                para.innerHTML = `<h2>${namee}</h2>`;
                heading.appendChild(para);
                const breakfast = document.getElementById('breakfast');
                breakfast.innerHTML = ''; // Clear previous content
                const head = document.createElement('div');
                head.innerHTML = `<h2>Breakfast</h2>`;
                breakfast.appendChild(head);
                const table = document.getElementById('planTable');
                table.innerHTML = ''; // Clear previous content
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

        // Fetch lunch
        fetch('/planlunch8')
            .then(response => response.json())
            .then(data => {
                const lunch = document.getElementById('lunch');
                lunch.innerHTML = ''; // Clear previous content
                const head = document.createElement('div');
                head.innerHTML = `<h2>Lunch</h2>`;
                lunch.appendChild(head);
                const table = document.getElementById('planTable1');
                table.innerHTML = ''; // Clear previous content
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

        // Fetch dinner
        fetch('/plandinner8')
            .then(response => response.json())
            .then(data => {
                const dinner = document.getElementById('dinner');
                dinner.innerHTML = ''; // Clear previous content
                const head = document.createElement('div');
                head.innerHTML = `<h2>Dinner</h2>`;
                dinner.appendChild(head);
                const table = document.getElementById('planTable2');
                table.innerHTML = ''; // Clear previous content
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
    // Condition 9
    else if (age >= 15 && age <= 25 && height >= 171 && height <= 180
        && weight >= 161 && weight <= 200 && gender === 'male' && goal === 'lose' && bodyType === 'endomorph' && foodType === 'veg') {


        fetch('/planbreak9')
            .then(response => response.json())
            .then(data => {
                const heading = document.getElementById('heading');
                const para = document.createElement('div');
                para.innerHTML = `<h2>${namee}</h2>`;
                heading.appendChild(para);
                const breakfast = document.getElementById('breakfast');
                breakfast.innerHTML = ''; // Clear previous content
                const head = document.createElement('div');
                head.innerHTML = `<h2>Breakfast</h2>`;
                breakfast.appendChild(head);
                const table = document.getElementById('planTable');
                table.innerHTML = ''; // Clear previous content
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

        // Fetch lunch
        fetch('/planlunch9')
            .then(response => response.json())
            .then(data => {
                const lunch = document.getElementById('lunch');
                lunch.innerHTML = ''; // Clear previous content
                const head = document.createElement('div');
                head.innerHTML = `<h2>Lunch</h2>`;
                lunch.appendChild(head);
                const table = document.getElementById('planTable1');
                table.innerHTML = ''; // Clear previous content
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

        // Fetch dinner
        fetch('/plandinner9')
            .then(response => response.json())
            .then(data => {
                const dinner = document.getElementById('dinner');
                dinner.innerHTML = ''; // Clear previous content
                const head = document.createElement('div');
                head.innerHTML = `<h2>Dinner</h2>`;
                dinner.appendChild(head);
                const table = document.getElementById('planTable2');
                table.innerHTML = ''; // Clear previous content
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
    // Condition 10
    else if (age >= 26 && age <= 35 && height >= 181 && height <= 190
        && weight >= 25 && weight <= 60 && gender === 'female' && goal === 'gain' && bodyType === 'ectomorph' && foodType === 'non_veg') {


        fetch('/planbreak10')
            .then(response => response.json())
            .then(data => {
                const heading = document.getElementById('heading');
                const para = document.createElement('div');
                para.innerHTML = `<h2>${namee}</h2>`;
                heading.appendChild(para);
                const breakfast = document.getElementById('breakfast');
                breakfast.innerHTML = ''; // Clear previous content
                const head = document.createElement('div');
                head.innerHTML = `<h2>Breakfast</h2>`;
                breakfast.appendChild(head);
                const table = document.getElementById('planTable');
                table.innerHTML = ''; // Clear previous content
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

        // Fetch lunch
        fetch('/planlunch10')
            .then(response => response.json())
            .then(data => {
                const lunch = document.getElementById('lunch');
                lunch.innerHTML = ''; // Clear previous content
                const head = document.createElement('div');
                head.innerHTML = `<h2>Lunch</h2>`;
                lunch.appendChild(head);
                const table = document.getElementById('planTable1');
                table.innerHTML = ''; // Clear previous content
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

        // Fetch dinner
        fetch('/plandinner10')
            .then(response => response.json())
            .then(data => {
                const dinner = document.getElementById('dinner');
                dinner.innerHTML = ''; // Clear previous content
                const head = document.createElement('div');
                head.innerHTML = `<h2>Dinner</h2>`;
                dinner.appendChild(head);
                const table = document.getElementById('planTable2');
                table.innerHTML = ''; // Clear previous content
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

        const heading = document.getElementById('heading');
        const para = document.createElement('div');
        para.innerHTML = `<h2>${namee}</h2>`;
        heading.appendChild(para);
        console.log('No matching diet plan found.');
    }
});

