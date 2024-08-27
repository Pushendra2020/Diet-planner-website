const mysql = require('mysql2');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/assets', express.static('assets'));
app.use('/assets', express.static('assets'));
app.use('/public', express.static('public'));

// Connect to the MySQL database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    database: 'ran'
});

db.connect((err) => {
    if (err) {
        console.error('Could not connect to the database.', err.message);
    } else {
        console.log('Connected to the MySQL database.');
    }
});

// Create the table if it doesn't exist
const createTableQuery = `
CREATE TABLE IF NOT EXISTS us (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_pass VARCHAR(255) NOT NULL
)`;

db.query(createTableQuery, (err) => {
    if (err) {
        console.error('Could not create table.', err.message);
    } else {
        console.log('Table created or already exists.');
    }
});



// Serve the login page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

// Handle login form submission
// app.post('/', (req, res) => {
//     const username = req.body.username;
//     const password = req.body.password;

//     const query = 'SELECT * FROM us WHERE user_email = ? AND user_pass = ?';
//     db.query(query, [username, password], (err, rows) => {
//         if (err) {
//             console.error('Error executing query:', err.message);
//             res.status(500).send('An error occurred while querying the database.');
//             return;
//         }

//         if (rows.length > 0) {
//             res.redirect('/dash.html');
//         } else {
//             res.redirect('/');
//         }
//     });
// });

// Function to authenticate user
function authenticateUser(username, password, callback) {
    const sql = `
        SELECT u.user_id, u.user_name, u.user_email, ui.gender, ui.goal, ui.body_type, ui.food_type, ui.age, ui.height, ui.weight
        FROM us u
        JOIN them ui ON u.user_id = ui.user_id
        WHERE u.user_email = ? AND u.user_pass = ?
    `;

    db.execute(sql, [username, password], (err, results) => {
        if (err) {
            return callback(err);
        }
        if (results.length === 0) {
            return callback(null, null);
        }
        callback(null, results[0]);
    });
}

// Route handler for login
app.post('/', (req, res) => {
    // const { username, password } = req.body;
    const username =req.body.username;
    const password = req.body.password;

    authenticateUser(username, password,(err, userInfo) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: 'Database error' });
        }

        if (!userInfo) {
            return res.status(404).json({ error: 'User not found or incorrect credentials' });
        }

        // Store user info in local storage on the client side
        res.json({
            userId: userInfo.user_id,
            gender: userInfo.gender,
            goal: userInfo.goal,
            bodyType: userInfo.body_type,
            foodType: userInfo.food_type,
            age: userInfo.age,
            height: userInfo.height,
            weight: userInfo.weight,
        });
    });
});



// Handle registration form submission
app.post('/register', (req, res) => {
    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;

    const insertUserQuery = 'INSERT INTO us (user_name, user_email, user_pass) VALUES (?, ?, ?)';
    db.query(insertUserQuery, [name, username, password], (err, results) => {
        if (err) {
            console.error('Error inserting user:', err.message);
            res.status(500).send('An error occurred while inserting the user.');
            return;
        }

        res.redirect('/form.html');
    });
});

app.post('/register', (req, res) => {
    const { namee,username, password, gender, goal, bodyType, foodType, age, height, weight } = req.body;

    const sql = 'INSERT INTO us (user_name, user_email, user_pass) VALUES (?, ?, ?)';
    const values = [namee,username, password]; // Assuming user_email is derived from username

    connection.query(sql, values, (error, results) => {
        if (error) {
            res.json({ error: 'Error creating account' });
            return;
        }

        const userId = results.insertId;
        res.json({ userId });
    });
});

// Serve the dashboard page
app.get('/dash.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets/dash.html'));
});

// Serve the form page
app.get('/form.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'form.html'));
});

// Start the server
app.listen(5500, () => {
    console.log('Server running on port 5500');
});

// for form

app.post('/re', (req, res) => {
    const weight = req.body.weight;
    const height = req.body.height;
    const age = req.body.age;
    const gender = req.body.gender;
    const goal = req.body.goal;
    const bodyType = req.body.bodyType;
    const foodType = req.body.foodType;
    const user_id = req.body.user_id;

    const insertUserQuery = 'INSERT INTO them (user_id,gender,goal,body_type,food_type,age,height,weight) VALUES (?,?, ?, ?,?,? ,?,?)';

    db.query(insertUserQuery, [user_id,gender, goal, bodyType,foodType,age,height,weight], (err, results) => {
        if (err) {
            console.error('Error inserting user:', err.message);
            res.status(500).send('An error occurred while inserting the user.');
            return;
        }

        res.redirect('dash.html');
    });
});





app.get('/form.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets/dash.html'));
});

app.get('/users', (req, res) => {
    const { name } = req.query;
    let sql = 'SELECT * FROM foods WHERE name_food LIKE ?';
    db.query(sql, [`%${name}%`], (err, results) => {
      if (err) {
        throw err;
      }
      res.json(results);
    });
  });



  app.use(express.static('public'));
app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


// Set up route to get plan data
app.get('/planbreak1', (req, res) => {
    let sql = 'SELECT * FROM planbreak1';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.get('/planlunch1', (req, res) => {
    let sql = 'SELECT * FROM planlunch1';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.get('/plandinner1', (req, res) => {
    let sql = 'SELECT * FROM plandinner1';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// 2

app.get('/planbreak2', (req, res) => {
    let sql = 'SELECT * FROM planbreak2';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.get('/planlunch2', (req, res) => {
    let sql = 'SELECT * FROM planlunch2';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.get('/plandinner2', (req, res) => {
    let sql = 'SELECT * FROM plandinner2';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// 3

app.get('/planbreak3', (req, res) => {
    let sql = 'SELECT * FROM planbreak3';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.get('/planlunch3', (req, res) => {
    let sql = 'SELECT * FROM planlunch3';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.get('/plandinner3', (req, res) => {
    let sql = 'SELECT * FROM plandinner3';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// 4

app.get('/planbreak4', (req, res) => {
    let sql = 'SELECT * FROM planbreak4';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.get('/planlunch4', (req, res) => {
    let sql = 'SELECT * FROM planlunch4';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.get('/plandinner4', (req, res) => {
    let sql = 'SELECT * FROM plandinner4';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// 5

app.get('/planbreak5', (req, res) => {
    let sql = 'SELECT * FROM planbreak5';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.get('/planlunch5', (req, res) => {
    let sql = 'SELECT * FROM planlunch5';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.get('/plandinner5', (req, res) => {
    let sql = 'SELECT * FROM plandinner5';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});
 

// 6

app.get('/planbreak6', (req, res) => {
    let sql = 'SELECT * FROM planbreak6';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.get('/planlunch6', (req, res) => {
    let sql = 'SELECT * FROM planlunch6';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.get('/plandinner6', (req, res) => {
    let sql = 'SELECT * FROM plandinner6';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// 7

app.get('/planbreak7', (req, res) => {
    let sql = 'SELECT * FROM planbreak7';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.get('/planlunch7', (req, res) => {
    let sql = 'SELECT * FROM planlunch7';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.get('/plandinner7', (req, res) => {
    let sql = 'SELECT * FROM plandinner7';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// 8

app.get('/planbreak8', (req, res) => {
    let sql = 'SELECT * FROM planbreak8';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.get('/planlunch8', (req, res) => {
    let sql = 'SELECT * FROM planlunch8';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.get('/plandinner8', (req, res) => {
    let sql = 'SELECT * FROM plandinner8';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// 9

app.get('/planbreak9', (req, res) => {
    let sql = 'SELECT * FROM planbreak6';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.get('/planlunch9', (req, res) => {
    let sql = 'SELECT * FROM planlunch9';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.get('/plandinner9', (req, res) => {
    let sql = 'SELECT * FROM plandinner9';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// 10

app.get('/planbreak10', (req, res) => {
    let sql = 'SELECT * FROM planbreak10';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.get('/planlunch10', (req, res) => {
    let sql = 'SELECT * FROM planlunch10';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.get('/plandinner10', (req, res) => {
    let sql = 'SELECT * FROM plandinner10';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});




app.get('/', (req, res) => {
    const userEmail = req.query.username; // Assuming you're identifying the user by email

    connection.query('SELECT user_id FROM us WHERE user_email = ?', [userEmail], (error, results) => {
        if (error) throw error;

        if (results.length > 0) {
            res.json({ userId: results[0].user_id });
        } else {
            res.json({ userId: null });
        }
    });
});
