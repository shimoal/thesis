var githubAuth = require('./githubAuthConfig.js');
var passport = require('passport');
var GithubStrategy = require('passport-github2').Strategy;
var usersCtrl = require('./../db/users/usersController.js');
var User = require('./../db/users/usersModel.js');

var app = require('./../app.js');
var githubCB;

if ( app.get('env') === 'development' ) {
  githubCB = "http://localhost:8080/auth/github/callback"
} else {
  githubCB = "https://hackeroos.herokuapp.com/auth/github/callback"
}

passport.use(new GithubStrategy({
    clientID: githubAuth.CLIENT_ID,
    clientSecret: githubAuth.CLIENT_SECRET,
    callbackURL: githubCB
  },
  function(accessToken, refreshToken, profile, done) {
    var user = {name: profile.displayName, email: profile.emails[0].value, profile_img: profile._json.avatar_url, github_id: profile.id}
    console.log('inside cb, user:', user);
    User.findOne({
      where: {
        github_id: user.github_id
      }
    }).then( function(userFound) {
      if (!userFound) {
        console.log('user does not exist');
        usersCtrl.save(user);
      } else {

        console.log('user exists');
      }
      return done(null, user);
    }).catch(function(err) {
      console.log('there was an error retrieving the user:', err);
    });
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
  authenticate: function(req, res, next) {
    console.log('inside authenticate', req.session);
    res.send(req.session);
  },

  failureRedirect: passport.authenticate('github', { failureRedirect: '/' }),

  successCallback: function(req, res, next) {
    console.log('inside sucess callback:', req.session);
    console.log('inside successCallback', req.user);
    res.send(req.session);
  }
};

module.exports = githubAuth;


