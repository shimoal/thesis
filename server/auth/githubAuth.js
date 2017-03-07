var githubAuth = require('./githubAuthConfig.js');
var passport = require('passport');
var GithubStrategy = require('passport-github2').Strategy;
var usersCtrl = require('./../db/users/usersController.js');
var User = require('./../db/users/usersModel.js');

var app = require('./../app.js');
var githubCB;


  githubCB = "https://hackeroo.xyz/auth/github/callback"


passport.use(new GithubStrategy({
    clientID: githubAuth.CLIENT_ID,
    clientSecret: githubAuth.CLIENT_SECRET,
    callbackURL: githubCB
  },
  function(accessToken, refreshToken, profile, done) {
    var user = {
      name: profile.displayName, 
      email: profile.emails[0].value, 
      profile_img: profile._json.avatar_url, 
      github_id: profile.id
    };
    
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
  done(null, user.github_id);
});

passport.deserializeUser(function(github_id, done) {
  // placeholder for custom user deserialization.
  // maybe you are going to get the user from mongo by id?
  // null is for errors
  console.log('inside deserialization', github_id);

  User.findOne({
    where: {
      github_id: github_id
    }
  }).then(function(userFound) {
    if (userFound) {
      done(null, userFound);
    }
  }).catch(function(err) {
    console.log('there was an error: ', err);
    done(err);
  });
});

var githubAuth = {
  authenticate: function(req, res, next) {
    if (req.session.passport) {
      console.log('there is a session, retrieving user:');
      usersCtrl.retrieve(req, res, next);
    } else {
      res.send('User is not authenticated');
    }
  },

  failureRedirect: passport.authenticate('github', { failureRedirect: '/' }),

  successCallback: function(req, res, next) {
    res.redirect('/dashboard');
  }
};

module.exports = githubAuth;

