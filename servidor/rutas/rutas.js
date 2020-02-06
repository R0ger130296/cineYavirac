const express = require("express");

const router = express.Router();

const Reserva = require("../models/tiporeserva");
const Scooter = require("../models/scotter");
const Personas = require("../models/tipo_personas");
const persons = require("../models/personas");
const detalles = require("../models/detalle_reserva");
//tipo_reservas metodos
router.get("/treserva", (req, res) => {
    const { query } = req;
    Reserva.findAll({ where: query })
        .then(reserva => {
            res.json(reserva);
        })
        .catch(err => {
            res.send("error: " + err);
        });
});

router.post("/treserva", (req, res, next) => {
    const datos = {
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        hora: req.body.hora,
    };

    if (!datos) {
        res.status(400);
        res,
            json({
                error: "Datos incorrectos"
            });
    } else {
        Reserva.create(datos)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.json("error: " + err);
            });
    }
});

router.put("/treserva", async (req, res) => {
    const { id } = req.query;
    const { descripcion, precio, hora } = req.body;
    const data = await Reserva.findAll({
        atributes: ["id", "descripcion", "precio", "hora"],
        where: {
            id
        }
    });

    if (data.length > 0) {
        data.forEach(async element => {
            await element.update({
                id,
                descripcion,
                precio,
                hora,
            });
        });
    }
    return res.json({
        message: "actualizado",
        data: data
    })
});


router.delete("/treserva", async (req, res) => {
    const { id } = req.query;
    const eliminar = await Reserva.destroy({
        where: { id }
    });
    res.json({
        message: "eliminado",
        data: eliminar
    })
});


//scooter metodos
router.get("/scooter", (req, res) => {
    const { query } = req;
    Scooter.findAll({ where: query })
        .then(scooter => {
            res.json(scooter);
        })
        .catch(err => {
            res.send("error: " + err);
        });
});

router.post("/scooter", (req, res, next) => {
    const datos = {
        descripcion: req.body.descripcion,
        estado: req.body.estado,
        codigo: req.body.codigo,
    };

    if (!datos) {
        res.status(400);
        res,
            json({
                error: "Datos incorrectos"
            });
    } else {
        Scooter.create(datos)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.json("error: " + err);
            });
    }
});

router.put("/scooter", async (req, res) => {
    const { id } = req.query;
    const { descripcion, estado, codigo } = req.body;
    const data = await Scooter.findAll({
        atributes: ["id", "descripcion", "estado", "codigo"],
        where: {
            id
        }
    });

    if (data.length > 0) {
        data.forEach(async element => {
            await element.update({
                id,
                descripcion,
                estado,
                codigo,
            });
        });
    }
    return res.json({
        message: "actualizado",
        data: data
    })
});

router.delete("/scooter", async (req, res) => {
    const { codigo } = req.query;
    const eliminar = await Reserva.destroy({
        where: { codigo }
    });
    res.json({
        message: "eliminado",
        data: eliminar
    })
});




//tipo_personas metodos
router.get("/tpersona", (req, res) => {
    const { query } = req;
    Personas.findAll({ where: query })
        .then(persona => {
            res.json(persona);
        })
        .catch(err => {
            res.send("error: " + err);
        });
});

router.post("/tpersona", (req, res, next) => {
    const datos = {
        tipoPersonaNombre: req.body.tipoPersonaNombre,
    };

    if (!datos) {
        res.status(400);
        res,
            json({
                error: "Datos incorrectos"
            });
    } else {
        Personas.create(datos)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.json("error: " + err);
            });
    }
});

router.put("/tpersona", async (req, res) => {
    const { id } = req.query;
    const { tipoPersonaNombre } = req.body;
    const data = await Personas.findAll({
        atributes: ["tipoPersonaNombre"],
        where: {
            id
        }
    });

    if (data.length > 0) {
        data.forEach(async element => {
            await element.update({
                id,
                tipoPersonaNombre,
            });
        });
    }
    return res.json({
        message: "actualizado",
        data: data
    })
});

router.delete("/tpersona", async (req, res) => {
    const { id } = req.query;
    const eliminar = await Reserva.destroy({
        where: { id }
    });
    res.json({
        message: "eliminado",
        data: eliminar
    })
});


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
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        direccion: req.body.direccion,
        password: req.body.password,
        email: req.body.email,
        tipoPersonaNombre: req.body.tipoPersonaNombre,
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


//detalles metodos
router.get("/detalle", (req, res) => {
    const { query } = req;
    detalles.findAll({ where: query })
        .then(detalle => {
            res.json(detalle);
        })
        .catch(err => {
            res.send("error: " + err);
        });
});

router.post("/detalle", (req, res, next) => {
    const datos = {
        descripccion: req.body.descripccion,
        precio_total: req.body.precio_total,
        idpersona: req.body.idpersona,
        idscooter: req.body.idscooter,
        idTipoReserva: req.body.idTipoReserva,
    };

    if (!datos) {
        res.status(400);
        res,
            json({
                error: "Datos incorrectos"
            });
    } else {
        detalles.create(datos)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.json("error: " + err);
            });
    }
});

router.put("/detalle", async (req, res) => {
    const { id } = req.query;
    const { descripccion, precio_total, idpersona, idscooter, idTipoReserva } = req.body;
    const data = await detalles.findAll({
        atributes: ["descripccion", "precio_total", "idpersona", "idscooter", "idTipoReserva"],
        where: {
            id
        }
    });

    if (data.length > 0) {
        data.forEach(async element => {
            await element.update({
                id,
                descripcion,
                precio_total,
                idpersona,
                idscooter,
                idTipoReserva,
            });
        });
    }
    return res.json({
        message: "actualizado",
        data: data
    })
});

router.delete("/detalle", async (req, res) => {
    const { id } = req.query;
    const eliminar = await Reserva.destroy({
        where: { id }
    });
    res.json({
        message: "eliminado",
        data: eliminar
    })
});

module.exports = router;