const Sequelize = require('sequelize');

const db = require('../database.js');
//create schema
/*const User = db.define('user', {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING,
    unique: true
  },
  github_id: {
    type: Sequelize.STRING,
    unique: true
  },
  profile_img: {
    type: Sequelize.STRING,
  }
});*/

const User = db.define('user', {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING,
    unique: true
  },
  github_id: {
<<<<<<< HEAD
    type: Sequelize.STRING,
    unique: true
  },
  profile_img: {
    type: Sequelize.STRING,
  },
  description: {
=======
>>>>>>> More work on authentication
    type: Sequelize.STRING,
  }
});

module.exports = User;

//rebuild database user table (done)
//in client/app.js do get/user-current in the get/session
  //pass the github_id
//in server/userController.js, instead of id, do github_id