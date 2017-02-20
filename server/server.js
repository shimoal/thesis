var express = require('express');

var app = express();

app.use(express.static(__dirname + '/../public'));

app.use('/bootstrap/js', express.static(__dirname + '/../node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/bootstrap/css', express.static(__dirname + '/../node_modules/bootstrap/dist/css')); // redirect CSS bootstrap

app.listen(8080, function() {
  console.log('listening on port 8080');
});