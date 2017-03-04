const Sequelize = require('sequelize');
const db = require('../database.js');
const Collaborate = require('../collaborate/collaborateModel.js');

const Review = db.define('review', {
	knowledge: {
		type: Sequelize.INTEGER
	},
	helpfulness: {
		type: Sequelize.INTEGER
	},
	overall: {
		type: Sequelize.INTEGER
	},
	content: {
		type: Sequelize.STRING
	}
});

// Review.belongsTo(Collaborate);

db.sync();
module.exports = Review;