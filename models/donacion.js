const Sequelize = require('sequelize');
Sequelize.DATE.prototype._stringify = function _stringify(date, options) {
    return this._applyTimezone(date, options).format('YYYY-MM-DD HH:mm:ss.SSS');
  };

const Donacion = (sequelize)=>{
    sequelize.define('donacion',{
        id_donacion:{
            type:Sequelize.INTEGER,
            allowNull:false,
            primaryKey: true,
            autoIncrement: true
        },
        cantidad:{
            type:Sequelize.FLOAT,
            allowNull:false 
        },
        fundacion:{
            type: Sequelize.STRING,
            allowNull:false
        },
        fecha:{
            type: Sequelize.STRING,
            allowNull:true
        },
        id_usuario:{
            type: Sequelize.STRING,
            allowNull: false
        }
    })
};

module.exports = Donacion;
