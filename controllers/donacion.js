const Donacion = require("../util/database").models.donacion;

exports.postAgregarDonacion = (req, res)=>{
    console.log(req.body);
    Donacion.create(req.body)
        .then(resultado=>{
            console.log("Registro exitoso"); 
            res.send(resultado) 
        })
        .catch(error=>{
            console.log(error); 
            res.send("Hubo un error") 
        })
}
exports.getDonacion = (req,res)=>{
    Donacion.findAll()
        .then(donaciones=>{
            console.log("Donacion:", donaciones);
            res.send(donaciones)
        })
}

exports.getDonaciones = (req, res) => {
    Donacion.findAll({where: {id_usuario: req.body.username}})
        .then(donaciones => {
            res.send(donaciones)
        })
}