var githubAuth = require('./githubAuthConfig.js');
var passport = require('passport');
var GithubStrategy = require('passport-github2').Strategy;

passport.use(new GithubStrategy({
    clientID: githubAuth.CLIENT_ID,
    clientSecret: githubAuth.CLIENT_SECRET,
    callbackURL: "http://localhost:8080/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
));


passport.serializeUser(function(user, done) {
  // placeholder for custom user serialization
  // console.log('information inside serializeUser:');
  // console.log('id: ', user.id);
  // console.log('email: ', user.emails[0].value);
  // console.log('name: ', user.displayName);
  // null is for errors
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  // placeholder for custom user deserialization.
  // maybe you are going to get the user from mongo by id?
  // null is for errors
  // console.log('deserializeUser', user);
  done(null, user);
});

var githubAuth = {
  failureRedirect: passport.authenticate('github', { failureRedirect: '/' }),

  successCallback: function(req, res) {
    console.log('inside successCallback');
    var session = req.session;
    session.username = req.user.displayName;
    console.log('session:', session.username);
    res.redirect('/');
  }
};

module.exports = githubAuth;


