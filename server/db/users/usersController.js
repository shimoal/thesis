const User = require('./usersModel.js');

const controller = {

  save: function(req, res, next) {
    User.create({
        email: req.body.email,
        username: req.body.username
    })
    .then(function(task) {
      task.save();
      return res.status(200).send('User Created');
    })
    .catch(function(err) {
      console.log(' X X X X Error saving user');
      return res.sendStatus(500);
    });
  },
  // create: function(req, res, next) {
  //   // const password = User.generateHash(req.body.password);
  //   // console.log('inside user create', req.body);

  //   User.findOrCreate({
  //     where: {
  //       email: req.body.email,
  //     },
  //     defaults: {
  //       name: req.body.username,
  //     }
  //   }).spread(function(user, created){
  //     if (created) {
  //       console.log('User is successfully created');
  //       res.end();
  //       // res.redirect('/dashboard');
  //     } 
  //   }).catch(function(err){
  //     console.log('error:', err);
  //     if (err.original.code === '23505') {
  //       return res.status(403).send('That email address already exists, please login');
  //     }
  //     return res.status(500);
  //   });

  // },
  retrieve: function(req, res, next) {
    console.log('calling usersController retrieve');
    User.findOne({
      where: {
        email: req.query.email
      }
    }).then(function(user) {
      console.log(user.id);
      res.json(user.id);
    })
  }
};

module.exports = controller;
