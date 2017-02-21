var express = require('express');
var path = require('path');

var app = express();

var http = require('http').Server(app);

app.use(express.static(__dirname + '/../public'));

app.use('/bootstrap/js', express.static(__dirname + '/../node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/bootstrap/css', express.static(__dirname + '/../node_modules/bootstrap/dist/css')); // redirect CSS bootstrap

app.get('/*', function(req, res) {
  res.sendFile(path.resolve(__dirname + '/../public/index.html'));
});

app.listen(8080, function() {
  console.log('listening on port 8080');
});