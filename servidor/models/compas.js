const Sequelize = require("sequelize");

const db = require("../database/db");

const persona = require("./personas")
const sala = require("./salas")
module.exports = db.sequelize.define("compas", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    numero_boletos: {
        type: Sequelize.STRING
    },
    idpersona: {
        type: Sequelize.INTEGER,
        references: {
            model: persona,
            key: 'id'
        }
    },
    idsala: {
        type: Sequelize.INTEGER,
        references: {
            model: sala,
            key: 'id'
        }
    }
});