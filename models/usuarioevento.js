const Sequelize = require('sequelize');

const UsuarioEvento = (sequelize)=>{
    sequelize.define('usuarioevento',{
        idue: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        eventoIdEvento:{
            type: Sequelize.INTEGER,
            allowNull:false
        },
        usuarioIdusuario:{
            type: Sequelize.STRING,
            allowNull:false
        }
    })
};

module.exports = UsuarioEvento;