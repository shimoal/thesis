var app = require('./../app.js');
const Sequelize = require('sequelize');

var dbHost;
var db;
var user;
var pw;
var dbPort;

  db = 'hackeroo';
  user = '';
  pw = '';

  const sequelize = new Sequelize(db, user, pw, {
    host: dbHost,
    port: dbPort,
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  });



module.exports = sequelize;