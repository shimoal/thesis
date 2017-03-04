const Sequelize = require('Sequelize');
const db = require('../database.js');

const AuthSessions = db.define('auth_sessions', {
  sid: {
    type: Sequelize.STRING,
    primaryKey: true,
    autoIncrement: false
  },
  sess: {
    type: Sequelize.JSON
  },
  expire: {
    type: Sequelize.DATE(6),
    unique: true
  }
});

module.exports = AuthSessions;