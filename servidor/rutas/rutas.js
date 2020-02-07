const express = require("express");

const router = express.Router();

const persons = require("../models/personas");
const compras = require("../models/compas");
const horarios = require("../models/horarios");
const peliculas = require("../models/peliculas");
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
        clave: req.body.clave,
        rol: req.body.rol,
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
    const { nombre, correo, clave, rol } = req.body;
    const data = await persons.findAll({
        atributes: ["nombre", "correo", "clave", "rol"],
        where: {
            id
        }
    });

    if (data.length > 0) {
        data.forEach(async element => {
            await element.update({
                id,
                nombre,
                correo,
                clave,
                rol,
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
    const eliminar = await persons.destroy({
        where: { id }
    });
    res.json({
        message: "eliminado",
        data: eliminar
    })
});

//metodos compras
router.get("/compras", (req, res) => {
    const { query } = req;
    compras.findAll({ where: query })
        .then(compra => {
            res.json(compra);
        })
        .catch(err => {
            res.send("error: " + err);
        });
});

router.post("/compras", (req, res, next) => {
    const datos = {
        numero_boletos: req.body.numero_boletos,
        idpersona: req.body.idpersona,
        idsala: req.body.idsala,
    };

    if (!datos) {
        res.status(400);
        res,
            json({
                error: "Datos incorrectos"
            });
    } else {
        compras.create(datos)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.json("error: " + err);
            });
    }
});
router.put("/compras", async (req, res) => {
    const { id } = req.query;
    const { numero_boletos, idpersona, idsala } = req.body;
    const data = await compras.findAll({
        atributes: ["numero_boletos", "idpersona", "idsala"],
        where: {
            id
        }
    });

    if (data.length > 0) {
        data.forEach(async element => {
            await element.update({
                id,
                numero_boletos,
                idpersona,
                idsala
            });
        });
    }
    return res.json({
        message: "actualizado",
        data: data
    })
});
router.delete("/compras", async (req, res) => {
    const { id } = req.query;
    const eliminar = await compras.destroy({
        where: { id }
    });
    res.json({
        message: "eliminado",
        data: eliminar
    })
});

//metodos horarios
router.get("/horario", (req, res) => {
    const { query } = req;
    horarios.findAll({ where: query })
        .then(horario => {
            res.json(horario);
        })
        .catch(err => {
            res.send("error: " + err);
        });
});

router.post("/horario", (req, res, next) => {
    const datos = {
        hora: req.body.hora,
    };

    if (!datos) {
        res.status(400);
        res,
            json({
                error: "Datos incorrectos"
            });
    } else {
        horarios.create(datos)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.json("error: " + err);
            });
    }
});
router.put("/horarios", async (req, res) => {
    const { id } = req.query;
    const { hora } = req.body;
    const data = await horarios.findAll({
        atributes: ["hora"],
        where: {
            id
        }
    });

    if (data.length > 0) {
        data.forEach(async element => {
            await element.update({
                id,
                hora,
            });
        });
    }
    return res.json({
        message: "actualizado",
        data: data
    })
});
router.delete("/horarios", async (req, res) => {
    const { id } = req.query;
    const eliminar = await horarios.destroy({
        where: { id }
    });
    res.json({
        message: "eliminado",
        data: eliminar
    })
});

//metodos pelicilas
router.get("/pelicula", (req, res) => {
    const { query } = req;
    peliculas.findAll({ where: query })
        .then(peli => {
            res.json(peli);
        })
        .catch(err => {
            res.send("error: " + err);
        });
});

router.post("/pelicula", (req, res, next) => {
    const datos = {
        resummen: req.body.resummen,
        categoria: req.body.categoria,
        valorBoleto: req.body.valorBoleto,
        imagen: req.body.imagen,
        estado: req.body.estado,
    };

    if (!datos) {
        res.status(400);
        res,
            json({
                error: "Datos incorrectos"
            });
    } else {
        peliculas.create(datos)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.json("error: " + err);
            });
    }
});
router.put("/pelicula", async (req, res) => {
    const { id } = req.query;
    const { resummen, categoria,valorBoleto,imagen,estado} = req.body;
    const data = await peliculas.findAll({
        atributes: ["resummen","categoria","valorBoleto","imagen","estado"],
        where: {
            id
        }
    });

    if (data.length > 0) {
        data.forEach(async element => {
            await element.update({
                id,
                resummen,
                categoria,
                valorBoleto,
                imagen,
                estado,
            });
        });
    }
    return res.json({
        message: "actualizado",
        data: data
    })
});
router.delete("/pelicula", async (req, res) => {
    const { id } = req.query;
    const eliminar = await peliculas.destroy({
        where: { id }
    });
    res.json({
        message: "eliminado",
        data: eliminar
    })
});

//metodos salas
router.get("/sala", (req, res) => {
    const { query } = req;
    salas.findAll({ where: query })
        .then(sala => {
            res.json(sala);
        })
        .catch(err => {
            res.send("error: " + err);
        });
});

router.post("/sala", (req, res, next) => {
    const datos = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        idpelicula: req.body.idpelicula,
        idhorario: req.body.idhorario,
    };

    if (!datos) {
        res.status(400);
        res,
            json({
                error: "Datos incorrectos"
            });
    } else {
        salas.create(datos)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.json("error: " + err);
            });
    }
});
router.put("/sala", async (req, res) => {
    const { id } = req.query;
    const { nombre, descripcion,idpelicula,idhorario} = req.body;
    const data = await salas.findAll({
        atributes: ["nombre","descripcion","idpelicula","idhorario"],
        where: {
            id
        }
    });

    if (data.length > 0) {
        data.forEach(async element => {
            await element.update({
                id,
                nombre,
                descripcion,
                idpelicula,
                idhorario,
            });
        });
    }
    return res.json({
        message: "actualizado",
        data: data
    })
});
router.delete("/sala", async (req, res) => {
    const { id } = req.query;
    const eliminar = await salas.destroy({
        where: { id }
    });
    res.json({
        message: "eliminado",
        data: eliminar
    })
});

module.exports = router;