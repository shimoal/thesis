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

  profileImage: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
    unigque: true
  },
  profileimg: {
    type: Sequelize.STRING
  }
});

module.exports = User;
