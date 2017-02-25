const Sequelize = require('sequelize');
const db = require('../database.js');
const User = require('../users/usersModel.js');

const Question = db.define('question', {
  topic: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.STRING
  },
  status: {
    type: Sequelize.STRING
  }
  
});

User.hasMany(Question);

db.sync();

module.exports = Question;
