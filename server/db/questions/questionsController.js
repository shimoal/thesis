const Question = require('./questionsModel.js');
const jwt = require('jsonwebtoken');
let dbconfig = require('../dbconfig.js');
// const mail = require('../../../sendgrid.js');

//For testing
// const dbconfig = require('../dbconfig.js');

//for prod
dbconfig = { secret: 'RnPbb8wyxmFwfuCy1glqyjguZ38JyPoo' };

const controller = {
  retrieve: function(req, res, next) {
    console.log('calling questionsController retrieve');
    const token = req.query.token;
    const payload = jwt.verify(token, dbconfig.secret);
    console.log(payload.id);

    Question.findAll({
      where: {
        userID: payload.id
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
  // sendMail: function(req, res, next) {
  //   mail.sendMail(req, res, next);
  // }
};

module.exports = controller;
