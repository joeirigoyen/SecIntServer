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

exports.getPoliticas = (req,res) => {
    res.sendFile(path.join(__dirname,'..','views','politicas.html'));
};

exports.getUserById = (req, res) => {
    Usuario.findAll()
        .then(users => 
            res.send(users)).catch(error => {
                console.log(error);
                res.send(error);
            })
};

exports.penis = (req, res) => {
    console.log("penis");
}