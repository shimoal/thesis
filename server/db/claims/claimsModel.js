const Sequelize = require('sequelize');
const db = require('../database.js');
// const User = require('../users/usersModel.js');

const Claim = db.define('claim', {
  id_helper: {
    type: Sequelize.INTEGER
  },
  id_learner: {
    type: Sequelize.INTEGER
  },
  id_question: {
    type: Sequelize.INTEGER
  }, 
});

// User.hasMany(Question);

db.sync();

module.exports = Claim;
