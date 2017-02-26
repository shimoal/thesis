const Claim = require('./claimsModel.js');

const controller = {
  save: function(req, res, next) {
    Claim.create({
      id_user: req.body.id_user,
      id_question: req.body.id_question,
    })
    .then(function(task) {
      task.save();
      return res.status(200).send('Claim successfully saved');
    })
    .catch(function(err) {
      console.log(' X X X X Error saving claim');
      return res.sendStatus(500);
    });
  },

}

module.exports = controller;