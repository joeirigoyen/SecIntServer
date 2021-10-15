const Evento = require("../util/database").models.evento;

exports.postAgregarEvento = (req,res)=>{
    console.log(req.body);
    //Guardar la información en la base de datos
    Evento.create(req.body)
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

exports.getEventos = (req,res)=>{
    Evento.findAll()
        .then(eventos=>{
            console.log("Eventos:", eventos);
            res.send(eventos)
        })
}

exports.postEvento = (req,res)=>{
    const evento = Evento.findOne({
        where: {
            id_evento: req.body.id_evento
        }
    }).then(evento => {
        if(evento.length == 0) {
            res.send("No existe ese evento.")
        } else {
            res.send(evento);
        }
    });
}

exports.postFindEventosByOrg = (req,res)=>{
    const evento = Evento.findAll({
        where: {
            org_creadora: req.body.org_creadora
        }
    }).then(eventos => {
        if(eventos.length == 0) {
            res.send("No existe ese evento.")
        } else {
            res.send(eventos);
        }
    });
}