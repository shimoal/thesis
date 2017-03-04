const Sequelize = require('sequelize');

const db = require('../database.js');

const User = db.define('user', {
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
  },
  description: {
    type: Sequelize.STRING,
  }
});

module.exports = User;