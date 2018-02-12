var express = require('express');
var app = express();
app.use(express.static(__dirname));
app.listen(process.env.PORT || 3000, function () {
    console.log('Running')
})
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
})
app.get('/result', function (req, res) {
    res.sendFile(__dirname + '/public/results.html');
})
app.get('/regi', function (req, res) {
    res.sendFile(__dirname + '/public/regi.html');
})
app.get('/main', function (req, res) {
    res.sendFile(__dirname + '/public/main.html');
})
app.get('/contact', function (req, res) {
    res.sendFile(__dirname + '/public/contact.html');
})