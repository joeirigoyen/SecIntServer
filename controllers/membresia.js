const Membresia = require("../util/database").models.membresia;

exports.postAgregarMembresia = (req, res)=>{
    console.log(req.body);
    Membresia.create(req.body)
        .then(resultado=>{
            console.log("Registro exitoso"); 
            res.send("Registro exitoso") 
        })
        .catch(error=>{
            console.log(error); 
            res.send("Hubo un error") 
        })
}
exports.getMembresia = (req,res)=>{
    Membresia.findAll()
        .then(membresias=>{
            console.log("Membresia:", membresias);
            res.send(membresias)
        })
}