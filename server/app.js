var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = module.exports = express();
var path = require("path");
var session = require('express-session');
var cookieParser = require('cookie-parser');

//set up for sessions
app.use(cookieParser());
app.use(session({
  secret: 'configSecret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

//Parse incoming body
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//database controllers
var usersCtrl = require('./db/users/usersController.js');
var questionsCtrl = require('./db/questions/questionsController.js');

//executing DB controller's methods

app.post('/question', questionsCtrl.save);
app.get('/question', questionsCtrl.retrieve);
app.get('/users', usersCtrl.retrieve);
app.post('/users', usersCtrl.save);

//routes
// app.use(express.static(__dirname + '/../public'));
// app.use('/bootstrap/js', express.static(__dirname + '/../node_modules/bootstrap/dist/js')); // redirect bootstrap JS
// app.use('/bootstrap/css', express.static(__dirname + '/../node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
// app.use(express.static(__dirname + '/../server/twitter'));

//https://nodejs.org/docs/latest/api/path.html#path_path_resolve_paths
//The path.resolve() method resolves a sequence of paths or path segments into an absolute path.

app.get('/graph1', function(req, res) {
	res.sendFile(img);
});
app.get('/graph2/', function(req, res) {
	//var img = fs.readFileSync(path.resolve(__dirname + '/../server/twitter/plot2.png'));
	// res.type('png');
	// res.set('Content-Type', 'png');
	//res.sendFile(path.resolve(__dirname + '/../server/twitterplot2.png'));
	//console.log('hello');
	//res.sendFile(path.resolve(__dirname + '/../server/twitter/charts.html'));
	res.sendFile(path.resolve(__dirname + '/../server/twitter/charts.html'));
});
app.get('/graph3', function(req, res) {
	res.sendFile(path.resolve(__dirname + '/plot/charts.html'));
});
// app.get('/*', function(req, res) {
//   res.sendFile(path.resolve(__dirname + '/../public/index.html'));
// });

app.get('/', function(req, res, next) {
  var sess = req.session
  if (sess.views) {
    sess.views++
    res.setHeader('Content-Type', 'text/html')
    res.write('<p>views: ' + sess.views + '</p>')
    res.write('<p>expires in: ' + (sess.cookie.maxAge / 1000) + 's</p>')
    res.end()
  } else {
    sess.views = 1
    res.end('welcome to the session demo. refresh!')
  }
})



