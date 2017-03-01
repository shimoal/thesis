var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 3000;

// app.use(express.static(__dirname + '/../public'));
// app.use('/bootstrap/js', express.static(__dirname + '/../node_modules/bootstrap/dist/js'));
// app.use('/bootstrap/css', express.static(__dirname + '/../node_modules/bootstrap/dist/css'));

// app.get('/*', function(req, res) {
//   res.sendFile(path.resolve(__dirname + '/../public/index.html'));
// });

app.listen(port, function() {
  console.log('Server is listening on port ' + port);
})