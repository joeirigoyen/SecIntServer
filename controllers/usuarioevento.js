const Usuarioevento = require("../util/database").models.usuarioevento;

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