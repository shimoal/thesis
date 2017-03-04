const db = require('../database.js'); //for raw sql query
const Collaborate = require('./collaborateModel.js');
const UserController = require('./../users/usersController.js');
const Question = require('../questions/questionsModel.js');

const controller = {
  save: function(req, res, next) {
    //create room name from question id and current time in millisecond
    var d = new Date();
    var roomNumber = req.body.id_question + d.getTime().toString();
    UserController.sendMail(req.body.id_learner, req.body.id_helper, roomNumber);
    
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
    Collaborate.findOne({
      where: {
        roomnumber: req.body.roomnumber
      }
    })
    .then(function(collaborate) {
      var body = collaborate;
      Question.findOne({
        where: {
          id: collaborate.id_question
        }
      })
      .then(function(question) {
        body.id_question = question; // replace id_question with question obj
        res.json(body);
      })
      .catch(function(err) {
        console.log('err in retrieving question through collaborate: ', err.message);
      });
    })
    .catch(function(err) {
      console.log('err in retrieving collaborate: ', err.message);
      res.sendStatus(404);
    });
  },

};

module.exports = controller;