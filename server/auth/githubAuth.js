var githubAuth = require('./githubAuthConfig.js');
var passport = require('passport');
var GithubStrategy = require('passport-github2').Strategy;
var usersCtrl = require('./../db/users/usersController.js');
var sess;

passport.use(new GithubStrategy({
    clientID: githubAuth.CLIENT_ID,
    clientSecret: githubAuth.CLIENT_SECRET,
    callbackURL: "http://localhost:8080/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    console.log('insdie Strategy cb');
    var user = {name: profile.displayName, email: profile.emails[0].value}
    return done(null, user);
  }
));


passport.serializeUser(function(user, done) {
  // placeholder for custom user serialization
  // console.log('information inside serializeUser:');
  // console.log('id: ', user.id);
  // console.log('email: ', user.emails[0].value);
  // console.log('name: ', user.displayName);
  // null is for errors
  console.log('inside serializeUser', user);

  done(null, user);
});

passport.deserializeUser(function(name, done) {
  // placeholder for custom user deserialization.
  // maybe you are going to get the user from mongo by id?
  // null is for errors
  // console.log('deserializeUser', user);
  console.log('inside deserializeUser', user);
  if (registeredUsers[name]) {
    console.log('insdie registeredUsers', registeredUsers);
    done(null, user);
  }

});

var registeredUsers = {};

var githubAuth = {
  checkUser: function(req, res, next) {
    if(sess) {
      console.log('user has a sess')
      // console.log('sess:', sess);
      next('user has a sess');
    } else {
      console.log('setting user session');
      sess = req.session;
      next();
    }
  },

  authenticate: function(req, res, next) {

    console.log('authenticate req', sess);

    if (sess && sess.username) {
      console.log('authenticated');
      next(sess.username);
    } else {
      console.log('not authenticated');
      res.redirect('/login');
    }
  },

  failureRedirect: passport.authenticate('github', { failureRedirect: '/' }),

  successCallback: function(req, res, next) {
    console.log('inside successCallback');

    sess.username = req.user.name;
    // console.log(sess);
    registeredUsers[req.user.name] = true;
    req.logIn(req.user, function(err) {
      if (err) {
        next(err);
      } else {
        return res.redirect('/');
      }
    });
    // res.redirect('/');
    // console.log(req.cookieID);
    // req.cookie.cookieName = 'user';

    // req.cookie.username = req.user.displayName;

    // console.log('cookie:', req.cookie.username);
    // req.session['username'] = req.user.displayName;
    // next();
    // res.redirect('/');
  }
};

module.exports = githubAuth;


