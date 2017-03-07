const Sequelize = require('sequelize');

const db = require('../database.js');
//create schema
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
    unigque: true
  }
});

module.exports = User;

