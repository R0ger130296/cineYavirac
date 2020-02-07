const Sequelize = require("sequelize");

const db = require("../database/db");

module.exports = db.sequelize.define("peliculas", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    resummen: {
        type: Sequelize.STRING
    },
    categoria: {
        type: Sequelize.STRING
    },
    valorBoleto: {
        type: Sequelize.STRING
    },
    imagen: {
        type: Sequelize.STRING
    },
    estado: {
        type: Sequelize.BOOLEAN
    }
});