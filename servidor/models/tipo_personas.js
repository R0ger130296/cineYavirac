const Sequelize = require("sequelize");

const db = require("../database/db");

module.exports = db.sequelize.define("tipo_personas", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  tipoPersonaNombre: {
    type: Sequelize.STRING
  }
});