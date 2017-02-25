const Question = require('./questionsModel.js');

const controller = {
  save: function(req, res, next) {
    Question.create({
        title: req.body.title,
        question: req.body.question,
        status: 'open',
    })
    .then(function(task) {
      task.save();
      return res.status(200).send('Question successfully saved.');
    })
    .catch(function(err) {
      console.log(err, 'Error saving question');
      return res.sendStatus(500);
    });
  },
  retrieve: function(req, res, next) {
    console.log('calling questionsController retrieve');
    Question.findAll({
      where: {
        id: 'something'
      }
    })
    .then(function(questions) {
      res.json(questions);
    })
    .catch(function(err) {
      console.log(err, 'error creating question');
      return res.sendStatus(500);
    });
  },
};

module.exports = controller;

