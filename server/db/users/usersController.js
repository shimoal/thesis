const User = require('./usersModel.js');
const mailer = require('./../../mailer.js');

const controller = {

  save: function(user) {
    User.create({
      email: user.email,
      name: user.name,
      github_id: user.github_id,
      profile_img: user.profile_img
    })
    .then(function(task) {
      task.save();
      console.log('user saved in database');
      return 'saved';
    })
    .catch(function(err) {
      console.log('error saving user:', err);
      return "error: " + err;
    });
  },

  retrieve: function(req, res, next) {
    console.log('inside user retrieve', req.session);
    User.findOne({
      where: {
        github_id: req.session.passport.user,
      }
    })
    .then(function(user) {
      console.log('User is successfully retrieved', user);
      res.json(user);
    })
    .catch(function(err) {
      console.log(' X X X X error retrieving current user');
      return res.sendStatus(500);
    });
  },

  retrieveAll: function(req, res, next) {
    User.findAll()
    .then(function(users) {
      console.log('Users are successfully retrieved');
      console.log('users:', users);
      res.json(users);
    })
    .catch(function(err) {
      console.log(' X X X X error retrieving all users');
      return res.sendStatus(500);
    });
  },

  sendMail: function(userId1, userId2){
    //need to test this once we have multiple users
    User.findAll({
      where: {
        $or: [{id: userId1}, {id: userId2}]
      }
    }).then(function(users) {
      console.log('users from users sendMail:', users );
      var emails = users.map(function(user) {
        return user.email;
      });
      mailer(emails);
    }).
    catch(function(err) {
      console.log(err, ' X X X X Error retriving user emails');
    });
  }

};

module.exports = controller;