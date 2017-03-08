const Sequelize = require('sequelize');
const db = require('../database.js');
const User = require('../users/usersModel.js');

const Question = db.define('questions', {
  userId: {
    type: Sequelize.INTEGER
  },
  title: {
    type: Sequelize.STRING
  },
  question: {
    type: Sequelize.TEXT
  },
  status: {
    type: Sequelize.STRING
  },
  deadline: {
    type: Sequelize.DATE
  }
  // name: { // to display the asker's name in the homepage
  //   type: Sequelize.STRING
  // },
  // id_helper: { // to prevent helper to claim the same Q twice
  //   type: Sequelize.STRING
  // }
  
});

User.hasMany(Question);

// SELECT "collaborate"."id", 
// "collaborate"."room_number", 
// "collaborate"."createdAt", 
// "collaborate"."updatedAt", 
// "collaborate"."id_learner", 
// "collaborate"."id_helper", 
// "collaborate"."id_question", 

// "Learner"."id" AS "Learner.id", 
// "Learner"."name" AS "Learner.name", 

// "Helper"."id" AS "Helper.id", 
// "Helper"."name" AS "Helper.name", 

// "Question"."id" AS "Question.id", 
// "Question"."title" AS "Question.title", 
// "Question"."question" AS "Question.question" 

// FROM "collaborates" AS "collaborate" 
// LEFT OUTER JOIN "users" AS "Learner" ON "collaborate"."id_learner" = "Learner"."id" 
// LEFT OUTER JOIN "users" AS "Helper" ON "collaborate"."id_helper" = "Helper"."id" 
// LEFT OUTER JOIN "questions" AS "Question" ON "collaborate"."id_question" = "Question"."id";


db.sync()
// .then(function() {
//   return Question.create({
//     userId: 1,
//     title: 'question test 1',
//     question: 'this is question content',
//     status: 'claimed',
//     // name: 'Ai'
//   })  
// })
// .then(function() {
//   Question.findAll()
//     .then(function(questions) {
//       questions.forEach(function(question) {
//         console.log(question.get())
//       })
//       console.log("************ create question successfully *************")

//     })
// })
// .catch(function(err) {
//   console.log('err in create question', err.message);
// });

module.exports = Question;
