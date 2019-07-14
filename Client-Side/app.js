//dependencies
var express = require('express');
var app = express();
var path = require('path');
var mysql = require('mysql');
var bodyParser = require('body-parser');


//connect to db
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'bus_db'
});


//used to fetch values from input fields in the body
app.use(bodyParser.urlencoded({ extended: true }));


app.use(bodyParser.json());

//preprocessor
app.set ('view engine', 'ejs');

//location of static files (css, images, etc.)
app.use(express.static(path.join(__dirname, 'static')));


//landing page
app.set ('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
    res.render(__dirname + '/index');
});

//redirect to login page
app.get('/login', (req, res) => {
    res.render('login');
});

//view available trips

//login
app.post('/verify', (req, res) => {
    let query = 'SELECT * FROM admin_users where username = "'+req.body.username+'" AND password = "'+req.body.password+'";'
    con.query(query, (err, result) => {
        if (err) throw err;
        if (result.length != 0) {
            console.log('user ' +req.body.username+' has logged in.');
            res.redirect('/home');
        } else if (result) {
            res.redirect('/login');
        }
    })
});

//homepage of logged in user
app.get('/home', (req, res) => {
    res.render('home');
})

app.get('/viewTrips', function(req, res) {
    let trips = [];
    //query to the db
    con.query("SELECT * FROM bus_sched", (err, result, fields) => {
        if (err) throw err;
        trips = JSON.stringify(result);
        let arr = JSON.parse(trips);
        res.render('viewTrips', {trips:arr});
    });
});


app.listen(8080);
console.log('8080 is da port');