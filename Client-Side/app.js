var express = require('express');
var app = express();
var path = require('path');

app.set ('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'static')));

app.get('/', function(req, res) {
    res.render(__dirname + '/index');
});

app.get('/login', function(req, res) {
    res.render('login');
})

app.listen(8080);
console.log('8080 is da port');
console.log(__dirname);