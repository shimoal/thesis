const User = require('./usersModel.js');

//For testing
const dbconfig = require('../dbconfig.js');

//for prod
// const dbconfig = { secret: 'RnPbb8wyxmFwfuCy1glqyjguZ38JyPoo' };


const controller = {
  create: function(req, res, next) {
    // const password = User.generateHash(req.body.password);
    User.findOrCreate({
      where: {
        email: req.body.email,
      },
      defaults: {
        name: req.body.name,
      }
    })
    .spread(function(user, created){
      if (created) {
        console.log('User is successfully created');
      } else {
        return res.sendStatus(500);
      }
    })
    .catch(function(err){
      if (err.original.code === '23505') {
        return res.status(403).send('That email address already exists, please login');
      }
      return res.sendStatus(500);
    })
  },

  retrieve: function(req, res, next) {
    console.log('Calling usersController retrieve', req.body);
    User.findOne({
      where: {
        id: req.query.id,
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
