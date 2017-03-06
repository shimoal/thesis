const db = require('../database.js'); //for raw sql query
const Collaborate = require('./collaborateModel.js');

const controller = {
  save: function(req, res, next) {
    //create room name from question id and current time in millisecond
    var d = new Date();
    var roomNumber = req.body.id_question + d.getTime().toString();
    
    Collaborate.create({
      id_learner: req.body.id_learner,
      id_helper: req.body.id_helper,
      id_question: req.body.id_question,
      room_number: roomNumber,
    })
    .then(function(task) {
      task.save();
      console.log('========== Success saving collaborate session, room_number:', roomNumber);
      return res.status(200);
    })
    .catch(function(err) {
      console.log('Error saving collaborate session');
      return res.sendStatus(500);
    });
  },

  retrieve: function(req, res, next) {
    
    // console.log('XXX calling questionsController retrieve');
    /*
    db.query('select claims.id, questions."userId" AS learner_id, questions.title, questions.question, questions.status, questions.deadline, questions."createdAt", users.id AS helper_id, users.name from users\
        INNER JOIN claims ON claims.id_user = users.id\
        INNER JOIN questions ON claims.id_question = questions.id', { model: Claim })
    .then(function(claims) {
      // console.log('XXX RAW results',claims);
      var promises = claims.map(function(claim) {
        // console.log('XXX each claim', claim);
        return {
          'id': claim.dataValues.id,
          'title':claim.dataValues.title,
          'question':claim.dataValues.question,
          'status':claim.dataValues.status,
          'deadline':'',
          'createdAt':claim.dataValues.createdAt,
          'learnerId':claim.dataValues.learner_id,
          'helperId':claim.dataValues.helper_id,
          'helpers': {
            name:claim.dataValues.name,
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
    });*/
  },

};

module.exports = controller;