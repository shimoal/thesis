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
  done(null, user);


});


var githubAuth = {
  checkUser: function(req, res, next) {
    if(!sess) {
      sess = req.session;
    }
      next();
  },

  authenticate: function(req, res, next) {
    if (sess && sess.username) {
      console.log('authenticated');
      res.send(sess);
    } else {
      console.log('not authenticated');
      res.redirect('/login');
    }
  },

  failureRedirect: passport.authenticate('github', { failureRedirect: '/' }),

  successCallback: function(req, res, next) {
    sess.username = req.user.name;

    req.logIn(req.user, function(err) {
      if (err) {
        next(err);
      } else {
        return res.redirect('/dashboard');
      }
    });

  }
};

module.exports = githubAuth;


