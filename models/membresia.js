const { application } = require('express');
const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Membresia = (sequelize)=>{
    sequelize.define('membresia',{
        id_membresia:{
            type:Sequelize.INTEGER,
            allowNull:false,
            primaryKey: true,
            autoIncrement: true
        },
        nombre:{
            type: Sequelize.STRING,
            allowNull:false
        },
        costo:{
            type: Sequelize.FLOAT,
            allowNull:false
        }
    })
};

module.exports = Membresia;