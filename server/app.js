var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = module.exports = express();

//For sessions and authentication
var passport = require('passport');
var session = require('express-session');
var githubAuth = require('./auth/githubAuth');
var pgSession = require('connect-pg-simple')(session);

//routes for static files (must be before all middleware)
app.use(express.static(__dirname + '/../public'));
app.use('/bootstrap/js', express.static(__dirname + '/../node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/bootstrap/css', express.static(__dirname + '/../node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
app.use(express.static(__dirname + '/../server/twitter'));

app.use(session({
  store: new pgSession({                            
    conString: "postgres://:@localhost:5432/hackeroo",
    tableName: 'auth_sessions'
  }),
  secret: "customSecret",
  resave: false,
  saveUninitialized: false,
  cookie: { 
    maxAge: 1000 * 60 * 60 * 5 
  } //cookie expires in 5 hours
}));

//authentication
app.use(passport.initialize());
app.use(passport.session());

//called when user signup/login using github
app.get('/auth/github', passport.authenticate('github'));

// GitHub will call this URL
app.get('/auth/github/callback', githubAuth.failureRedirect, githubAuth.successCallback);

app.post('/logout', function(req, res){
  console.log('logging out');
  req.session.destroy(function(err) {
    if (err) {
      console.log('error:', err);
    }
  });
  res.json('session logged out');

});

//for accessing session to get user data to the client
app.get('/session',  githubAuth.authenticate);

//Parse incoming body
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//database controllers
var usersCtrl = require('./db/users/usersController.js');
var questionsCtrl = require('./db/questions/questionsController.js');
var claimsCtrl = require('./db/claims/claimsController.js');

//executing DB controller's methods
app.post('/question', questionsCtrl.save);
app.get('/question', questionsCtrl.retrieve);

app.get('/question-for-one-user', questionsCtrl.retrieveForOneUser);

app.get('/users', usersCtrl.retrieve);
app.post('/users', usersCtrl.save);

app.get('/user-current', usersCtrl.retrieve);

app.post('/claim', claimsCtrl.save);
app.get('/claim', claimsCtrl.retrieve);

/****** coding trends routes ******/
//https://nodejs.org/docs/latest/api/path.html#path_path_resolve_paths
//The path.resolve() method resolves a sequence of paths or path segments into an absolute path.
app.get('/graph2/', function(req, res) {
  res.sendFile(path.resolve(__dirname + '/../server/twitter/charts.html'));
});

app.get('/*', function(req, res) {
  res.sendFile(path.resolve(__dirname + '/../public/index.html'));
});






