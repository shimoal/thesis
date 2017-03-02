var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = module.exports = express();

var passport = require('passport');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var githubAuth = require('./auth/githubAuth.js');

app.use(cookieParser());

//Parse incoming body
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//database controllers
var usersCtrl = require('./db/users/usersController.js');

app.get('/users', usersCtrl.retrieve);
app.post('/users', usersCtrl.save);

app.use(express.static(__dirname + '/../public'));
app.use('/bootstrap/js', express.static(__dirname + '/../node_modules/bootstrap/dist/js'));
app.use('/bootstrap/css', express.static(__dirname + '/../node_modules/bootstrap/dist/css'));

app.use(passport.initialize());
app.use(passport.session());

app.use(session({
  secret: "customSecret",
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));


app.get('/auth/github', passport.authenticate('github', function(err, user, info) {
  console.log('inside auth');
  console.log(user);
}));

// GitHub will call this URL
app.get('/auth/github/callback', githubAuth.failureRedirect, githubAuth.successCallback);

app.post('/logout', function(req, res){
  console.log('logging out');
  req.logout();
  // req.session.destroy(function(err) {
  //   if (err) {
  //     console.log('error:', err);
  //   }
    res.redirect('/');
  });

app.get('/*', function(req, res) {
  res.sendFile(path.resolve(__dirname + '/../public/index.html'));
});