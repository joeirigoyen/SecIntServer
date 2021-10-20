const Proyecto = require("../util/database").models.proyecto;

exports.postAgregarProyecto = (req, res)=>{
    console.log(req.body);
    Proyecto.create(req.body)
        .then(resultado=>{
            console.log(resultado); 
            res.send(resultado) 
        })
        .catch(error => {
            console.log(error); 
            res.send("Hubo un error") 
        })
}

exports.getProyectos = (req,res)=>{
    Proyecto.findAll()
        .then(proyectos=>{
            console.log("Proyectos:", proyectos);
            res.send(proyectos)
        })
}

exports.postProyecto = (req,res)=>{
    const proyecto = Proyecto.findOne({
        where: {
            id_proyecto: req.body.id_proyecto
        }
    }).then(proyecto => {
        if(proyecto.length == 0) {
            res.send("No existe ese proyecto.")
        } else {
            res.send(proyecto);
        }
    });
}

exports.getProyectosFrom = (req, res) => {
    Proyecto.findAll({where: {org_creadora: req.body.org}})
        .then(proyectos => {
            console.log(proyectos)
            res.send(proyectos)
        })
}