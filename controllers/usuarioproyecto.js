const Usuarioproyecto = require("../util/database").models.usuarioproyecto;

exports.postAgregarUP = (req, res)=>{
    console.log(req.body);
    Usuarioproyecto.create(req.body)
        .then(resultado=>{
            console.log("Registro exitoso"); 
            res.send("Registro exitoso") 
        })
        .catch(error=>{
            console.log(error); 
            res.send("Hubo un error") 
        })
}