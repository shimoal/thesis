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
      console.log('User is successfully retrieved');
      res.json(user);
    })
    .catch(function(err) {
      console.log(' X X X X error retrieving current user');
      return res.sendStatus(500);
    });
  }
};

module.exports = controller;
