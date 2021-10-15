const Donacion = require("../util/database").models.donacion;

exports.postAgregarDonacion = (req, res)=>{
    console.log(req.body);
    Donacion.create(req.body)
        .then(resultado=>{
            console.log("Registro exitoso"); 
            res.send("Registro exitoso") 
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