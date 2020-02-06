const Sequelize = require("sequelize");

const db = require("../database/db");

module.exports = db.sequelize.define("tipo_reservas", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  descripcion: {
    type: Sequelize.STRING
  },
  precio: {
    type: Sequelize.INTEGER
  },
  hora: {
    type: Sequelize.TIME
  }
});