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
            })
          }
        }) //---- end change question status to claimed
      
    })
    .catch(function(err) {
      console.log(err,' X X X X Error saving claim');
      return res.sendStatus(500);
    });
  },
  retrieve: function(req, res, next) {
    
    // console.log('XXX calling questionsController retrieve');
    var currentUserId = req.query.userId;

    Question.belongsTo(User, {foreignKey: 'userId'});
    Question.hasMany(Claim, {foreignKey: 'id_question'});
    Claim.belongsTo(Question, {foreignKey: 'id_question'});
    Claim.findAll({ where: {id_learner: currentUserId}, include: [{model: Question, 
                                                                    include: [User]
                                                                  }]
                                                                })
    
    .then(function(claims) {
      console.log('========== Success getting claimed questions');
      // console.log('XXX CLAIM RAW results', claims);
      var promises = claims.map(function(claim) {
        // console.log('XXX each claim', claim);
        // console.log('XXX each claim claim.question.user', claim.question.user);
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
      console.log('Error retrieving claimed questions');
      return res.sendStatus(500);
    });
  },

}

module.exports = controller;