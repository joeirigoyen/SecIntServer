const Sequelize = require('sequelize');

const UsuarioProyecto = (sequelize)=>{
    sequelize.define('usuarioproyecto',{
        idup: {
            type: Sequelize.INTEGER,
            allowNull:false,
            primaryKey: true,
            autoIncrement: true
        },
        proyectoIdProyecto:{
            type: Sequelize.INTEGER,
            allowNull:false
        },
        usuarioIdusuario:{
            type: Sequelize.STRING,
            allowNull:false
        }
    })
};

module.exports = UsuarioProyecto;