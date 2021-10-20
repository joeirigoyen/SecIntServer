const Usuario = require("../util/database").models.usuario;
const Evento = require("../util/database").models.evento;
const sequelize = require('../util/database');
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const path = require("path");
const jwt = require('jsonwebtoken')
const llave = 'a123a'

// POST y GET
exports.postLogin = (req, res)=>{
    console.log(req.body.user)
    Usuario.findOne({where:{usuario: req.body.user}})
        .then(resultado => {
            if (resultado) {
                const validPassword = bcrypt.compare(req.body.password, resultado.password, function(err, resp) {
                    if (!resp) {
                        res.json({message: "false", username: "", names: "", accType: 0})
                        console.log(resp)
                    } else {
                        const payload = {
                            check: true
                        }
                        const token = jwt.sign(payload, llave, {
                            expiresIn: 1440
                        });
                        res.json({message: "true", username: req.body.user, names: resultado.nombre, accType: resultado.tipo})
                        console.log(resp)
                    }
                });
            } else {
                console.log("User doesn't exist")
                res.send({message:"inexistent", username: "", names: "", accType: 0});
            }
        });
};

exports.postAgregarUsuario = (req,res)=>{
    console.log(req.body);
    //Guardar la información en la base de datos
    try {
        Usuario.create(req.body)
        .then(resultado=>{
                console.log("Registro exitoso")
                console.log(resultado)
                res.send({status: "succeeded", message: "register successful"})
        })
        .catch(error=>{
            console.log(error)
            res.send({status: "failed", message: "server error"})
        })
    } catch (RequestError) {
        console.log("No se puede agregar")
        res.json({status: "failed", message: "invalid date"})
    }
};

exports.isValidDate = (req, res) => {
    console.log("Called")
    Usuario.update({fecha_nacimiento: req.body.fecha_nacimiento}, {where: {usuario: "testorg"}})
    .then(resultado => {
        console.log("Fecha válida");
        res.send({status: "succeeded", message: "valid date"});
    })
    .catch(error => {
        console.log("Fecha inválida");
        res.send({status: "failed", message: "invalid date"});
    })
}

exports.postGetUserExists = (req, res) => {
    Usuario.findOne({where: {email: req.body.email}})
        .then(resultado => {
            if (resultado) {
                res.json({message: "true"});
                console.log(resultado)
            } else {
                res.json({message: "false"});
                console.log("No hay resultado")
            }
        })
}

exports.postGetSecQuestion = (req, res) => {
    Usuario.findOne({where: {email: req.body.email}})
        .then(resultado => {
            if (resultado) {
                res.json({message: "true", sec_q: resultado.sec_q});
            } else {
                res.json({message: "false", sec_q: ""});
            }
        })
}

exports.postNewPassword = (req, res) => {
    Usuario.findOne({where: {email: req.body.email}})
        .then(resultado => {
            if (resultado) {
                bcrypt.compare(req.body.sec_a, resultado.sec_a, function(err, resp) {
                    if (!resp) {
                        res.json({message: "false"});
                        console.log(resp)
                    } else {
                        res.json({message: "true"});
                    }
                })
            } else {
                res.json({message: "inexistent"})
            }
        })
};

exports.putNewPassword = (req, res) => {
    var value = {password: req.body.password}
    var selector = {email: req.body.email}
    const salt = bcrypt.genSaltSync(10, 'a');
    const encryptedPass = bcrypt.hashSync(req.body.password, salt);
    Usuario.update(
        {password: encryptedPass},
        {where: {email: req.body.email}})
        .then(response => {
            res.json({message: "done"})
        })
        .catch(error => {
            res.send(error)
            console.log(error)
        })
};

exports.getPoliticas = (req,res) => {
    res.sendFile(path.join(__dirname,'..','views','politicas.html'));
};

exports.getUserById = (req, res) => {
    Usuario.findOne({where: {usuario: req.body.usuario}})
        .then(user => 
            res.send(user))
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
};

exports.getUsername = (req, res) => {
    Usuario.findOne({where: {usuario: req.body.usuario}})
        .then(user => {
            if (user) {
                console.log("user already exists")
                res.json({message: "true"});
            } else {
                console.log("user doesnt exist yet")
                res.json({message: "false"});
            }
        })
}