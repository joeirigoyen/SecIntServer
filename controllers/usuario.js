const Usuario = require("../util/database").models.usuario;
const Evento = require("../util/database").models.evento;
const sequelize = require('../util/database');
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const path = require("path");

// POST y GET
exports.postLogin = (req, res)=>{
    const user = Usuario.findOne({usuario: req.body.usuario});
    if (user) {
        const validPassword = bcrypt.compare(req.body.password, user.password);
        if (validPassword) {
            res.send("Correct password");
        } else {
            res.send("Incorrect password my boy");
        }
    } else {
        res.send("User doesn't exist.")
    }
};

exports.postAgregarUsuario = (req,res)=>{
    console.log(req.body);
    //Guardar la información en la base de datos
    Usuario.create(req.body)
        .then(resultado=>{
            console.log("Registro exitoso")
            console.log(resultado)
            res.send("Éxito jaja")
        })
        .catch(error=>{
            console.log(error)
            res.send("Hubo un error")
        })
};

exports.postParticipar = (req, res) => {
    Usuario.findOne({where: {usuario: req.body.id_usuario}}).then(user => {
        Evento.findOne({where: {id_evento: req.body.id_evento}}).then(event => {
            user.setEvents([event]);
            res.send("Participante añadido.");
        }).catch(error => {
            console.log(error);
            res.send("Error.");
        })
    }).catch(error => {
        console.log(error);
        res.send("Hubo un error.");
    })
}

exports.getPoliticas = (req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','politicas.html'));
};