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

// Review.belongsTo(Collaborate, {foreignKey: 'id_collaborate', as: 'Collaborate'});

// Collaborate.belongsTo(Review, {foreignKey: 'id_review', as: 'Review'});

db.sync()
// .then(function() {
// 	return Review.create({
// 		knowledge: 5,
// 		helpfulness: 5,
// 		overall: 5,
// 		content: 'good helper',
// 		id_collaborate: 6,
// 	})
// })
.catch(function(err) {
	console.log("err in review model", err.message);
});
module.exports = Review;