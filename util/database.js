const Sequelize = require('sequelize');
const {applyRelations} = require('./relations');
const sequelize = new Sequelize('DibujandoUnManana','sa','Helloworld9.',{
    dialect: 'mssql',
    dialectOptions:{
        options:{
            useUTC: false,
            dateFirst: 1
        }
    },
    define:{
        //Evitar que nos ponga createdAT y updatedAt
        timestamps: false,
        //Evitar que agregue una s al final
        freezeTableName: true
    }
});

//cargar las referencias de los modelos
const modelDefiners =[
    require('../models/usuario'),
    require('../models/membresia'),
    require('../models/evento'),
    require('../models/donacion'),
    require('../models/usuarioevento'),
    require('../models/proyecto'),
    require('../models/usuarioproyecto')
];

//Adherir los modelos al objeto de conexion
for (const modelDefiner of modelDefiners){
    modelDefiner(sequelize)
}
//Realizar las relaciones entre las tablas de la base de datos
applyRelations(sequelize);

//Exportando el objeto sequelize
module.exports = sequelize;