const Sequelize = require("sequelize");

const db = require("../database/db");

const pelicula = require("./peliculas")
const horario = require("./horarios")
module.exports = db.sequelize.define("salas", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: Sequelize.STRING
    },
    descripcion: {
        type: Sequelize.STRING
    },
    idpelicula: {
        type: Sequelize.INTEGER,
        references: {
            model: pelicula,
            key: 'id'
        }
    },
    idhorario: {
        type: Sequelize.INTEGER,
        references: {
            model: horario,
            key: 'id'
        }
    }
});