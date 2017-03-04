const Sequelize = require('sequelize');
const db = require('../database.js');
const User = require('../users/usersModel.js');
const Question = require('../questions/questionsModel.js');
const Review = require('../reviews/reviewsModel.js');

const Collaborate = db.define('collaborate', {
  room_number: {
    type: Sequelize.STRING
  }
});

// User.hasMany(Question);
Collaborate.belongsTo(User, {foreignKey: 'id_learner', as: 'Learner'});
Collaborate.belongsTo(User, {foreignKey: 'id_helper', as: 'Helper'});
Collaborate.belongsTo(Question, {foreignKey: 'id_question', as: 'Question'});
Collaborate.belongsTo(Review, {foreignKey: 'id_review'});

db.sync();

module.exports = Collaborate;
