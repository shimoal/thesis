const Sequelize = require('sequelize');
const db = require('../database.js');
// const User = require('../users/usersModel.js');

const Collaborate = db.define('collaborate', {
  id_learner: {
    type: Sequelize.INTEGER
  },
  id_helper: {
    type: Sequelize.INTEGER
  },
  id_question: {
    type: Sequelize.INTEGER
  }, 
  room_number: {
    type: Sequelize.STRING
  }, 
  
});

// User.hasMany(Question);

db.sync();

module.exports = Collaborate;
