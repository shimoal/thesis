var githubAuth = require('./githubAuthConfig.js');
var passport = require('passport');
var GithubStrategy = require('passport-github2').Strategy;
var usersCtrl = require('./../db/users/usersController.js');
var User = require('./../db/users/usersModel.js');
var sess;

var app = require('./../app.js');
var githubCB;



  githubCB = "http://hackeroo.xyz/auth/github/callback"


passport.use(new GithubStrategy({
    clientID: githubAuth.CLIENT_ID,
    clientSecret: githubAuth.CLIENT_SECRET,
    callbackURL: githubCB
  },
  function(accessToken, refreshToken, profile, done) {
    console.log('insdie Strategy cb', profile);
    var user = {name: profile.displayName, email: profile.emails[0].value, profile_img: profile._json.avatar_url, github_id: profile.id}
    console.log('user:', user);
    return done(null, user);
  }
));


passport.serializeUser(function(user, done) {
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
      console.log('GITHUB USER inside !sess');
      sess = req.session;
    }
      console.log('GITHUB USER outside !sess');
      next();
  },

  authenticate: function(req, res, next) {
    if (sess && sess.github_id) {
      console.log('GITHUB USER authenticated');
      res.send(sess);
    } else {
      console.log('GITHUB USER not authenticated');
      res.redirect('/signup');
    }
  },

  failureRedirect: passport.authenticate('github', { failureRedirect: '/' }),

  successCallback: function(req, res, next) {
    console.log('inside successCallback', req.user);
    req.logIn(req.user, function(err) {
      if (err) {
        next(err);
      } else {
        return res.redirect('/');
      }
    });
  }
};

module.exports = githubAuth;