const db = require('../database.js');
const Review = require('./reviewsModel.js');
const User = require('../users/usersModel.js');
const Collaborate = require('../collaborate/collaborateModel.js');

const controller = {
	save: function(req, res, next) {
		Review.create({
			content: req.body.content,
			knowledge: req.body.knowledge,
			helpfulness: req.body.helpfulness,
			overall: req.body.overall,
		})
		.then(function(task) {
			task.save();
			res.status(200).send("Reivew successfully saved.");
		})
		.catch(function(err) {
			console.log("review table error", err.message);
			res.status(500).send("Having trouble saving reviews, please try again.");
		});
	},

	retrieveAllByUserName: function(req, res, next) {
		User.findOne({
			where: { name: req.body.name }
		})
		.then(function(user) {
			Collaborate.findAll({
				where: { id_helper: user.id },
				attributes: { exclude: ['room_number', 'id_question', 'id_helper'] },
				include: [{model: Reivew}, 
									{model: User, 
										as: 'Learner',
										attributes: ['name']
									}
				]
			})
			.then(function(collaborates) {
				res.send(collaborates);
			})
			.catch(function(err) {
				res.status(404).send("This user does not have any review yet.");
			});
		})
		.catch(function(err) {
			res.status(500).send("Having trouble retrieving reviews for this user.");
		});

	}
}