const nodemailer = require("nodemailer");

const sendMail = (req, res) => {
    const datos = req.body.datos

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // use SSL
        auth: {
            user: 'grarogccee@gmail.com',
            pass: '********'
        }
    });
    const mailOptions = {
        from: 'grarogccee@gmail.com',
        to: datos.correo,
        subject: 'Cine Adventure',
        html: `<div><h1>CINE YAVIRAC</h1><br><h2>Sala: ${datos.sala}</h2><br><h2>Película: ${datos.pelicula}</h2><br><h2>Horario: ${datos.horario}</h2><br><h2>Número de Boletos: ${datos.boletos}</h2></div>`
    };

    transporter.verify((err, success) => {
        if (err) console.error(err);
        console.log('Your config is correct');
    });
    console.log(transporter.options.host);
    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                datos: null,
                mensaje: `Error del servidor: ${err}`
            })
        }
        return res.status(200).json({
            ok: true,
            datos: "Correo Enviado"
        })
    })
}

module.exports = {
    sendMail,
}