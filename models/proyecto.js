const Sequelize = require('sequelize');
Sequelize.DATE.prototype._stringify = function _stringify(date, options) {
    return this._applyTimezone(date, options).format('YYYY-MM-DD HH:mm:ss.SSS');
  };

const Proyecto = (sequelize)=>{
    sequelize.define('proyecto',{
        id_proyecto:{
            type:Sequelize.INTEGER,
            allowNull:false,
            primaryKey: true
        },
        nombre:{
            type:Sequelize.STRING,
            allowNull:false 
        },
        descripcion:{
            type: Sequelize.STRING,
            allowNull:false
        },
        org_creadora:{
            type: Sequelize.STRING,
            allowNull:false
        }
    })
};

module.exports = Proyecto;
