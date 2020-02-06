const Sequelize = require("sequelize");

const db = require("../database/db");
const Personas = require("./personas");
const Scooter=require("./scotter");
const tReserva=require("./tiporeserva");

module.exports = db.sequelize.define("detalle_reservas", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descripccion: {
        type: Sequelize.STRING
    },
    precio_total: {
        type: Sequelize.INTEGER
    },
    idpersona: {
        type: Sequelize.INTEGER,
        references: {
            model: Personas,
            key: 'id'
        }
    },
    idscooter: {
        type: Sequelize.INTEGER,
        references: {
            model: Scooter,
            key: 'id'
        }
    },
    idTipoReserva: {
        type: Sequelize.INTEGER,
        references: {
            model: tReserva,
            key: 'id'
        }
    },
});