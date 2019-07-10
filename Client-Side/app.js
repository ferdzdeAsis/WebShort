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
    password: '',
    database: 'bus_db'
});


//used to fetch values from input fields in the body
app.use(bodyParser.urlencoded({ extended: true}));

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

//login
app.get('/verify', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    con.query("SELECT "+username+","+password+"FROM admin_users;", (err, result) => {
        if (err) throw err;
        /**if result is null {
            render invalid credentials
        } else {
            render welcome user page   
        }*/
    });
});

app.get('/book', (req,res) => {

});




app.listen(8080);
console.log('8080 is da port');