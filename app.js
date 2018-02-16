var express = require('express');
var app = express();
app.use(express.static(__dirname));
app.listen(process.env.PORT || 3000, function () {
    console.log('Running')
})
var usrCounter = 0;
app.get('/', function (req, res) {
    usrCounter = usrCounter + 1;
    console.log(usrCounter)
    res.sendFile(__dirname + '/a.html');
})
app.get('/result', function (req, res) {
    res.sendFile(__dirname + '/public/results.html');
})
app.get('/register', function (req, res) {
    res.sendFile(__dirname + '/public/regi.html');
})
app.get('/home', function (req, res) {
    res.sendFile(__dirname + '/public/main.html');
})
app.get('/events', function (req, res) {
    res.sendFile(__dirname + '/public/events.html');
})
app.get('/contact', function (req, res) {
    res.sendFile(__dirname + '/public/contact.html');
})
app.get('/count', function (req, res) {
    console.log(usrCounter)
    res.write("Total visits :" + usrCounter);
    res.end();
})