//Biblioteca para crear rutas absolutas o relativas de los recursos de la aplicación
const path = require('path'); 
//Biblioteca manejo de JSON
const bodyParser = require('body-parser');
//Importando la biblioteca express para la creación de servidores
const express = require('express');

//Traer un objeto sequelize
const sequelize = require("./util/database");
const donacionRoutes = require("./routes/donacion");
const usuarioRoutes = require("./routes/usuario");
const membresiaRoutes = require("./routes/membresia");
const eventoRoutes = require("./routes/evento");
const usuarioeventoRoutes = require("./routes/usuarioevento");
const proyectoRoutes = require("./routes/proyecto");
const usuarioproyectoRoutes = require("./routes/usuarioproyecto");

// Iniciar API
const app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Sirve para leer la informacion que envian los formularios API
app.use(bodyParser.urlencoded({extended:true}))
app.use('/usuario',usuarioRoutes);
app.use('/membresia',membresiaRoutes);
app.use('/evento',eventoRoutes);
app.use('/donacion',donacionRoutes);
app.use('/ue',usuarioeventoRoutes);
app.use('/proyecto',proyectoRoutes);
app.use('/up',usuarioproyectoRoutes);

// Iniciar conexión
sequelize.sync()
    .then(resultado=>{
        console.log("Conexion exitosa");
        app.listen(8080,()=>console.log("Servidor en línea en el puerto 8080"));
    })
    .catch(error=>console.log(error))

