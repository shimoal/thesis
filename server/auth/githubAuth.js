var githubAuth = require('./githubAuthConfig.js');
var passport = require('passport');
var GithubStrategy = require('passport-github2').Strategy;
var usersCtrl = require('./../db/users/usersController.js');
var User = require('./../db/users/usersModel.js');
var sess;

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
  // placeholder for custom user serialization
  // console.log('information inside serializeUser:');
  // console.log('id: ', user.id);
  // console.log('email: ', user.emails[0].value);
  // console.log('name: ', user.displayName);
  // null is for errors
  console.log('inside serializeUser', user);
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
  }
};

module.exports = githubAuth;


