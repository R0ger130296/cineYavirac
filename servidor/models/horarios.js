const Sequelize = require("sequelize");

const db = require("../database/db");

module.exports = db.sequelize.define("horarios", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  hora: {
    type: Sequelize.DATE
  }
});