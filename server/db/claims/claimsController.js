const db = require('../database.js'); //for raw sql query
const Claim = require('./claimsModel.js');
const Question = require('../questions/questionsUserSpecificModel.js');
const User = require('../users/usersModel.js');

const controller = {
  save: function(req, res, next) {
    Claim.create({
      id_helper: req.body.id_helper,
      id_learner: req.body.id_learner,
      id_question: req.body.id_question,
    })
    .then(function(task) {
      task.save();
      return res.status(200).send('Claim successfully saved');
    })
    .catch(function(err) {
      console.log(err,' X X X X Error saving claim');
      return res.sendStatus(500);
    });
  },
  retrieve: function(req, res, next) {
    
    // console.log('XXX calling questionsController retrieve');
    var currentUserId = req.query.userId;

    // User.hasMany(Question, {foreignKey: 'id_user'}); //user has many questions
    // User.hasMany(Question, {foreignKey: 'userId'}); //user has many questions
    
    Question.belongsTo(User, {foreignKey: 'userId'});
    Question.hasMany(Claim, {foreignKey: 'id_question'});
    Claim.belongsTo(Question, {foreignKey: 'id_question'});
    Claim.findAll({ where: {id_learner: currentUserId}, include: [{model: Question, 
                                                                    include: [User]
                                                                  }]
                                                                })
    
    // db.query('select claims.id, questions."userId" AS learner_id, questions.title, questions.question, questions.status, questions.deadline, questions."createdAt", users.id AS helper_id, users.name from users\
    //     INNER JOIN claims ON claims.id_helper = users.id\
    //     INNER JOIN questions ON claims.id_question = questions.id', { model: Claim })
    .then(function(claims) {
      // console.log('XXX CLAIM RAW results', claims);
      var promises = claims.map(function(claim) {
        console.log('XXX each claim', claim);
        console.log('XXX each claim claim.question.user', claim.question.user);
        return {
          'id': claim.dataValues.id,
          'title':claim.question.title,
          'question':claim.question.question,
          'status':claim.question.status,
          'deadline':'',
          'createdAt':claim.dataValues.createdAt,
          'learnerId':claim.dataValues.id_learner,
          'helperId':claim.dataValues.id_helper,
          'helpers': {
            name:claim.question.user.name,
            }
          }
      });
      Promise.all(promises).then(function() {
        res.send(promises);
      })

    })
    .catch(function(err) {
      console.log(' X X X X error retrieving claims');
      return res.sendStatus(500);
    });
  },

}

module.exports = controller;