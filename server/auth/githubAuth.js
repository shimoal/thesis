var githubAuth = require('./githubAuthConfig.js');
var passport = require('passport');
var GithubStrategy = require('passport-github2').Strategy;
<<<<<<< HEAD
<<<<<<< HEAD
var usersCtrl = require('./../db/users/usersController.js');
var User = require('./../db/users/usersModel.js');
var sess;
=======
>>>>>>> Add github authentication
=======
var usersCtrl = require('./../db/users/usersController.js');
var sess;
>>>>>>> More work on authentication

var app = require('./../app.js');
var githubCB


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
<<<<<<< HEAD
<<<<<<< HEAD
    console.log('insdie Strategy cb', profile);
    var user = {name: profile.displayName, email: profile.emails[0].value, profile_img: profile._json.avatar_url, github_id: profile.id}
    console.log('user:', user);
    return done(null, user);
=======
    return done(null, profile);
>>>>>>> Add github authentication
=======
    console.log('insdie Strategy cb');
    var user = {name: profile.displayName, email: profile.emails[0].value}
    return done(null, user);
>>>>>>> More work on authentication
  }
));


passport.serializeUser(function(user, done) {
<<<<<<< HEAD
  // null is for errors
  console.log('inside serializeUser', user);
  done(null, user);
});

passport.deserializeUser(function(name, done) {
=======
  // placeholder for custom user serialization
  // console.log('information inside serializeUser:');
  // console.log('id: ', user.id);
  // console.log('email: ', user.emails[0].value);
  // console.log('name: ', user.displayName);
  // null is for errors
  console.log('inside serializeUser', user);

  done(null, user);
});

<<<<<<< HEAD
passport.deserializeUser(function(user, done) {
>>>>>>> Add github authentication
=======
passport.deserializeUser(function(name, done) {
>>>>>>> More work on authentication
  // placeholder for custom user deserialization.
  // maybe you are going to get the user from mongo by id?
  // null is for errors
  // console.log('deserializeUser', user);
<<<<<<< HEAD
<<<<<<< HEAD
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
      res.redirect('/login');
    }
  },

  failureRedirect: passport.authenticate('github', { failureRedirect: '/' }),

  successCallback: function(req, res, next) {
    console.log('inside successCallback', req.user);
    User.findOne({
      where: {
        github_id: req.user.github_id
      }
    }).then( function(user) {
      if (!user) {
        console.log('user does not exist');
        usersCtrl.save(req.user);

      } else {
        console.log('user exists');
      }
    })

    sess.github_id = req.user.github_id;

    req.logIn(req.user, function(err) {
      if (err) {
        next(err);
      } else {
        return res.redirect('/dashboard');
      }
    });

=======
  done(null, user);
=======
  console.log('inside deserializeUser', user);
  if (registeredUsers[name]) {
    console.log('insdie registeredUsers', registeredUsers);
    done(null, user);
  }

>>>>>>> More work on authentication
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
<<<<<<< HEAD
    var session = req.session;
    session.username = req.user.displayName;
    console.log('session:', session.username);
    res.redirect('/');
>>>>>>> Add github authentication
=======

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
>>>>>>> More work on authentication
  }
};

module.exports = githubAuth;


