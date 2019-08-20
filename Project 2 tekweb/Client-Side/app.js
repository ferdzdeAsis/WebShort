//dependencies
let express = require('express');
let app = express();
let path = require('path');
let mysql = require('mysql');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let session = require('express-session');
var randomString = require('randomstring');


//connect to db
let con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'bus_db'
});


//used to fetch values from input fields in the body
app.use(bodyParser.urlencoded({ extended: true }));


app.use(bodyParser.json());

app.use(cookieParser());

//configuration of session
app.use(session({
    key: 'sid',
    secret: 'webtek',
    resave: false,
    saveUninitialized: false,
    cookie: {expires: 120000}
}));


//preprocessor
app.set ('view engine', 'ejs');

//location of static files (css, images, etc.)
app.use(express.static(path.join(__dirname, 'static')));


//landing page
app.set ('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'static')));

app.use((req, res, next) => {
    if(req.cookies.sid && !req.session.user) {
        res.clearCookie(req.sessionID);
    }
    next();
});


//landing page of unregistered users
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
        let query = 'SELECT * FROM client_users where username = "'+req.body.username+'" AND password = "'+req.body.password+'";'
        con.query(query, (err, result) => {
            if (err) throw err;
            if (result.length != 0) {
                console.log('user ' +req.body.username+' has logged in.');
                req.session.user = req.body.username;
                res.redirect('/home');
            } else if (result) {
                res.redirect('/login');
            }
        });
});

//homepage of logged in user
app.get('/home', (req, res) => {
    if (req.session.user) {
        var user = req.session.user;
        res.render('home', {user});
    } else {
        res.redirect('/login');
    }
    
})

//displays all the trips available
app.get('/viewTrips', (req, res) => {
    if (req.session.user) {
        let trips = [];
        //query to the db
        let query = "SELECT * FROM bus_sched"
        con.query(query, (err, result) => {
            if (err) throw err;
            trips = JSON.stringify(result);
            let arr = JSON.parse(trips);
            res.render('viewTrips', {trips:arr});
        });
    } else {
        res.redirect('/login');
    }
});

app.post('/viewDetails', (req, res) => {
    if(req.session.user) {
        let query = 'SELECT * FROM bus_sched where trip_id = "'+req.body.id+'";';
        let selected = [];
        con.query(query, (err, result) => {
            if(err) throw err;
            selected = JSON.stringify(result);
            let arr = JSON.parse(selected);
            res.render('details', {selected:arr});
        });
    } else {
        res.redirect('/login');
    }
});

app.post('/book', (req, res) => {
    let trip_id = req.body.id;
    let seatNo = req.body.seatNo;
    let user = req.session.user;
    let query = 'SELECT seats_available, fare FROM bus_sched where trip_id = "'+trip_id+'";';
    con.query(query, (err, result) => {
        if (err) throw err;
        let bookSelected = JSON.stringify(result);
        let arr = JSON.parse(bookSelected);
        let updatedSeats = arr[0].seats_available - seatNo;
        let totalAmount = arr[0].fare * seatNo;
        let reserveID = randomString.generate(7);
        let insert = 'INSERT INTO bus_db.reserved(trip_id, reserve_id, seatNo, amount, client_name)VALUES("'+trip_id+'","'+reserveID+'","'+seatNo+'","'+totalAmount+'","'+user+'");';
        con.query(insert);
        res.render('success', {resId: reserveID, amount: totalAmount});
    });
});

app.post('/searchTrip', (req, res) => {
    if(req.session.user) {
        let trips = [];
        let query = 'SELECT * from bus_sched where origin = "'+req.body.origin+'" and destination = "'+req.body.destination+'";';
        con.query(query, (err, result) => {
            if(err) throw err;
            trips = JSON.stringify(result);
            let arr = JSON.parse(trips);
            res.render('viewTrips', {trips:arr});
        });
    } else {
        res.render('login');
    }
});

//sort by id
app.get('/viewTripsSortById', (req, res) => {
    if(req.session.user) {
        let trips = [];
        let query = 'SELECT * from bus_sched ORDER BY 1;'
        con.query(query, (err, result) => {
            if(err) throw err;
            trips = JSON.stringify(result);
            let arr = JSON.parse(trips);
            res.render('viewTrips', {trips:arr});
        });
    } else {
        res.render('login');
    }
});

//sort by bus liner
app.get('/viewTripsSortByLiner', (req, res) => {
    if(req.session.user) {
        let trips = [];
        let query = 'SELECT * from bus_sched ORDER BY 2;'
        con.query(query, (err, result) => {
            if(err) throw err;
            trips = JSON.stringify(result);
            let arr = JSON.parse(trips);
            res.render('viewTrips', {trips:arr});
        });
    } else {
        res.render('login');
    }
});

//sort by origin
app.get('/viewTripsSortByOrigin', (req, res) => {
    if(req.session.user) {
        let trips = [];
        let query = 'SELECT * from bus_sched ORDER BY 3;'
        con.query(query, (err, result) => {
            if(err) throw err;
            trips = JSON.stringify(result);
            let arr = JSON.parse(trips);
            res.render('viewTrips', {trips:arr});
        });
    } else {
        res.render('login');
    }
});

//sort by destination
app.get('/viewTripsSortByDes', (req, res) => {
    if(req.session.user) {
        let trips = [];
        let query = 'SELECT * from bus_sched ORDER BY 4;'
        con.query(query, (err, result) => {
            if(err) throw err;
            trips = JSON.stringify(result);
            let arr = JSON.parse(trips);
            res.render('viewTrips', {trips:arr});
        });
    } else {
        res.render('login');
    }
});

//sort by seats available
app.get('/viewTripsSortBySeats', (req, res) => {
    if(req.session.user) {
        let trips = [];
        let query = 'SELECT * from bus_sched ORDER BY 5;'
        con.query(query, (err, result) => {
            if(err) throw err;
            trips = JSON.stringify(result);
            let arr = JSON.parse(trips);
            res.render('viewTrips', {trips:arr});
        });
    } else {
        res.render('login');
    }
});

//sort by date of departure
app.get('/viewTripsSortByDate', (req, res) => {
    if(req.session.user) {
        let trips = [];
        let query = 'SELECT * from bus_sched ORDER BY 6;'
        con.query(query, (err, result) => {
            if(err) throw err;
            trips = JSON.stringify(result);
            let arr = JSON.parse(trips);
            res.render('viewTrips', {trips:arr});
        });
    } else {
        res.render('login');
    }
});

//sort by fare
app.get('/viewTripsSortByFare', (req, res) => {
    if(req.session.user) {
        let trips = [];
        let query = 'SELECT * from bus_sched ORDER BY 7;'
        con.query(query, (err, result) => {
            if(err) throw err;
            trips = JSON.stringify(result);
            let arr = JSON.parse(trips);
            res.render('viewTrips', {trips:arr});
        });
    } else {
        res.render('login');
    }
});

// listen on port 8080
app.listen(8080, function() {
    console.log('port 8080'); 
});