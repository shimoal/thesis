const User = require('./usersModel.js');

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
      return 'error: ' + err;
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
      console.log('========== Successful retrieving Current User', user);
      res.json(user);
    })
    .catch(function(err) {
      console.log('Error retrieving Current user');
      return res.sendStatus(500);
    });
  },
  
  retrievePublic: function(req, res, next) {
    console.log('req.query.userId', req.query.userId);
    User.findOne({
      where: {
        id: req.query.userId,
      }
    })
    .then(function(user) {
      console.log('========== Successful retrieving User Public Profile', user);
      res.json(user);
    })
    .catch(function(err) {
      console.log('Error retrieving User Public Profile');
      return res.sendStatus(500);
    });
  },
  
  retrieveAll: function(req, res, next) {
    User.findAll()
    .then(function(users) {
      console.log('========== Successful retrieving All User');
      console.log('users:', users);
      res.json(users);
    })
    .catch(function(err) {
      console.log('Error retrieving All User');
      return res.sendStatus(500);
    });
  }

};

module.exports = controller;