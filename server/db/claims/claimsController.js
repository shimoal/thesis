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
      
      //Change the question status to claimed
      Question.findOne({ 
        where: {
          id: req.body.id_question} })
        .then(function(question) {
          // console.log('change question status in', question);
          if (question) {
            question.updateAttributes({
              status: 'claimed'
            })
            .then(function() {
              return res.status(200).send('========== Success saving Claim');
            });
          }
        }); //---- end change question status to claimed
      
    })
    .catch(function(err) {
      console.log(err, 'Error saving claim');
      return res.sendStatus(500);
    });
  },
  retrieve: function(req, res, next) {
    
    console.log('XXX calling claimController retrieve with userId:', req.query.userId);
    var currentUserId = req.query.userId;

    // Question.belongsTo(User, {foreignKey: 'userId'});
    Question.hasMany(Claim, {foreignKey: 'id_question'});
    
    // Claim.belongsTo(Question, {foreignKey: 'id_question'});
    Claim.belongsTo(User, {foreignKey: 'id_helper'});
    // User.hasMany(Claim, {foreignKey: 'id_helper'});

    Question.findAll({ where: {
      $and: [{userId: currentUserId}, {status: 'claimed'}]
      }, 
      // include: [{model: User, where: {id: 'id_helper'}, 
      //   include: [{model: Question}]
      // }]
      include: [
        {
          model: Claim, 
          include: [
            User
          ]  
        }
      ]

      // include: [{model: Question}],
      // include: [{model: User}],
    })
    .then(function(questions) {
      console.log('========== Success getting claimed questions');
      // console.log('XXX CLAIM RAW results', questions);
      var promises = questions.map(function(question) {
        console.log('XXX each question.dataValues.claims', question.dataValues.claims);
        console.log('XXX each claim helper', question.dataValues.claims[0].dataValues.user.dataValues.name);
        // console.log('XXX each claim claim.question.user', claim.question.user);
        return {
          'id': question.dataValues.id,
          'title': question.dataValues.title,
          'question': question.dataValues.question,
          'status': question.dataValues.status,
          'deadline': '',
          'createdAt': question.dataValues.createdAt,
          'learnerId': question.dataValues.claims[0].id_learner,
          'helperId': question.dataValues.claims[0].id_helper,
          
          //make helpers an array of helpers objects
          'helpers': [{
            helperName: question.dataValues.claims[0].dataValues.user.dataValues.name,
            helperId: question.dataValues.claims[0].dataValues.user.dataValues.id,
          }]
        };
      });
      Promise.all(promises).then(function() {
        res.send(promises);
      });

    })
    .catch(function(err) {
      console.log('@_@ Error retrieving claimed questions', err);
      return res.sendStatus(500);
    });
  },
};

module.exports = controller;