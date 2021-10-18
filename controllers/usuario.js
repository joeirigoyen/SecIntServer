const Usuario = require("../util/database").models.usuario;
const Evento = require("../util/database").models.evento;
const sequelize = require('../util/database');
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const path = require("path");

// POST y GET
exports.postLogin = (req, res)=>{
    console.log(req.body)
    Usuario.findOne({where:{usuario: req.body.usuario}})
        .then(resultado => {
            if (resultado) {
                const validPassword = bcrypt.compare(req.body.password, resultado.password, function(err, resp) {
                    if (req.body.password != resultado.password) {
                        res.json({message: resp})
                        console.log(resp)
                    }
                });
            } else {
                console.log("User doesn't exist")
                res.send({message:"inexistent"});
            }
        });
};

exports.postAgregarUsuario = (req,res)=>{
    console.log(req.body);
    //Guardar la información en la base de datos
    Usuario.create(req.body)
        .then(resultado=>{
            console.log("Registro exitoso")
            console.log(resultado)
            res.send(resultado)
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
            res.send(users))
        .catch(error => {
            console.log(error);
            res.send(error);
        })
};

exports.getOrgs = (req, res) => {
    Usuario.findAll({where : {tipo : 2}})
        .then(orgs => 
            res.send(orgs))
        .catch(error => {
            console.log(error);
            res.send(error);
        })
}