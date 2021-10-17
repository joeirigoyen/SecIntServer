// Hi
const Usuarioevento = require("../util/database").models.usuarioevento;
const Usuario = require("../util/database").models.usuario;
const Evento = require("../util/database").models.evento;

exports.postAgregarUE = (req, res) => {
    console.log(req.body);
    Usuarioevento.create(req.body)
        .then(resultado=>{
            console.log("Registro exitoso"); 
            res.send("Registro exitoso") 
        })
        .catch(error=>{
            console.log(error); 
            res.send("Hubo un error");
        })
}

exports.getUserEvents = (req, res) => {
    console.log(req.body);
    const events = Evento.findAll({where: {id_evento: req.body.id_evento}});    
}