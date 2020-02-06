const Sequelize = require("sequelize");

const db = require("../database/db");

const Tpersonas= require("./tipo_personas")
module.exports = db.sequelize.define("personas", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombres: {
    type: Sequelize.STRING
  },
  apellidos:{
      type: Sequelize.STRING
  },
  direccion:{
      type:Sequelize.STRING
  },
  password:{
      type:Sequelize.STRING
  },
  email:{
      type:Sequelize.STRING
  },
  tipoPersonaNombre:{
      type:Sequelize.INTEGER,
      references:{
          model:Tpersonas,
          key:'id'
      }
  }
});