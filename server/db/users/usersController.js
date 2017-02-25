const User = require('./usersModel.js');

//For testing
const dbconfig = require('../dbconfig.js');

//for prod
// const dbconfig = { secret: 'RnPbb8wyxmFwfuCy1glqyjguZ38JyPoo' };


const controller = {
  create: function(req, res, next) {
    const password = User.generateHash(req.body.password);
    User.findOrCreate({
      //need to create a form with email and password
      where: {
        email: req.body.email
      },
      defaults: {
        password: password
      }
    }).spread(function(user, created){
      if (created) {
        console.log('User is successfully created');
        const token = jwt.sign({ user: user.email, id: user.id }, dbconfig.secret, {
          expiresIn: 86400 // expires in 24 hours
        });
        return res.json({
          success: true,
          token: token
        });
      } else {
        return res.sendStatus(500);
      }
    }).catch(function(err){
      if (err.original.code === '23505') {
        return res.status(403).send('That email address already exists, please login');
      }
      return res.sendStatus(500);
    })
  },
  retrieve: function() {
    console.log('calling usersController retrieve');
  }
};

module.exports = controller;
