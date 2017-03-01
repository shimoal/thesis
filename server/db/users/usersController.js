const User = require('./usersModel.js');

const controller = {

  // save: function(req, res, next) {
  //   User.create({
  //       email: req.body.email,
  //       username: req.body.username
  //   })
  //   .then(function(task) {
  //     task.save();
  //     return res.status(200).send('User Created');
  //   })
  //   .catch(function(err) {
  //     console.log(' X X X X Error saving user');
  //     return res.sendStatus(500);
  //   });
  // },
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

  // },
  // retrieve: function(req, res, next) {
  //   console.log('calling usersController retrieve');
  //   User.findOne({
  //     where: {
  //       email: req.query.email
  //     }
  //   }).then(function(user) {
  //     console.log(user.id);
  //     res.json(user.id);
  //   }).catch('')

  // }

  retrieve: function(req, res, next) {
    console.log('Calling usersController retrieve', req.body);
    User.findOne({
      where: {
        github_id: req.query.github_id, //pass github id here
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


  // retrieve: function(user) {
  //   console.log('calling usersController retrieve');
  //   User.findOne({
  //     where: {
  //       email: req.query.email
  //     }
  //   }).then(function(user) {
  //     console.log(user.id);
  //     res.json(user.id);
  //   })
  // }
};

module.exports = controller;
