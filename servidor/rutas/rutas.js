const express = require("express");

const router = express.Router();

const persons = require("../models/personas");
const compras = require("../models/compas");
const horarios = require("../models/horarios");
const peliculs = require("../models/peliculas");
const salas = require("../models/salas");

//personas metodos
router.get("/persona", (req, res) => {
    const { query } = req;
    persons.findAll({ where: query })
        .then(persona => {
            res.json(persona);
        })
        .catch(err => {
            res.send("error: " + err);
        });
});

router.post("/persona", (req, res, next) => {
    const datos = {
        nombre: req.body.nombre,
        correo: req.body.correo,
    };

    if (!datos) {
        res.status(400);
        res,
            json({
                error: "Datos incorrectos"
            });
    } else {
        persons.create(datos)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.json("error: " + err);
            });
    }
});
router.put("/persona", async (req, res) => {
    const { id } = req.query;
    const { nombres, apellidos, direccion, password, email, tipoPersonaNombre } = req.body;
    const data = await persons.findAll({
        atributes: ["nombres", "apellidos", "direccion", "password", "email", "tipoPersonaNombre"],
        where: {
            id
        }
    });

    if (data.length > 0) {
        data.forEach(async element => {
            await element.update({
                id,
                nombres,
                apellidos,
                password,
                email,
                tipoPersonaNombre,
            });
        });
    }
    return res.json({
        message: "actualizado",
        data: data
    })
});
router.delete("/persona", async (req, res) => {
    const { id } = req.query;
    const eliminar = await Reserva.destroy({
        where: { id }
    });
    res.json({
        message: "eliminado",
        data: eliminar
    })
});

;

module.exports = router;