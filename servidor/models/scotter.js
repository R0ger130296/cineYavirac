const Sequelize = require("sequelize");

const db = require("../database/db");

module.exports=db.sequelize.define("scoters",{
    id:{
      type:Sequelize.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    descripcion:{
      type:Sequelize.STRING
    },
    estado:{
      type:Sequelize.BOOLEAN
    },
    codigo:{
      type:Sequelize.STRING
    }
  });
  