const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');

const Usuario = (sequelize)=> {
    var userSchema = sequelize.define('usuario',{
        nombre:{
            type:Sequelize.STRING,
            allowNull:false 
        },
        apellidoPaterno:{
            type: Sequelize.STRING,
            allowNull:true
        },
        apellidoMaterno:{
            type: Sequelize.STRING,
            allowNull:true
        },
        fecha_nacimiento:{
            type: Sequelize.DATEONLY,
            allowNull:false
        },
        tipo:{
            type: Sequelize.INTEGER,
            allowNull:false
        },
        rfc:{
            type: Sequelize.STRING,
            allowNull:false
        },
        email:{
            type: Sequelize.STRING,
            allowNull:false
        },
        password:{
            type: Sequelize.STRING,
            allowNull:false
        },
        usuario:{
            type: Sequelize.STRING,
            allowNull:false,
            primaryKey:true 
        },
        membresiumIdMembresia:{
            type: Sequelize.INTEGER,
            allowNull:false
        },
        sec_q: {
            type: Sequelize.STRING,
            allowNull:false
        },
        sec_a:{
            type:Sequelize.STRING,
            allowNull:false
        },
        pais:{
            type:Sequelize.STRING,
            allowNull:true
        },
        descripcion:{
            type:Sequelize.STRING,
            allowNull:true
        }
    },
    {
        hooks: {
            beforeCreate: async(user) => {
                try {
                    if (user.password) {
                        const salt = await bcrypt.genSaltSync(10, 'a');
                        user.password = bcrypt.hashSync(user.password, salt);
                    }
                    if (user.sec_a) {
                        const salt = await bcrypt.genSaltSync(10, 'a');
                        user.sec_a = bcrypt.hashSync(user.sec_a, salt);
                    }
                } catch(error) {
                    const response = {
                        status: 500,
                        data: {},
                        error: {
                            message: "user match failed"
                        } 
                    };
                }
            },
            beforeUpdate: async(user) => {
                try {
                    console.log("Se mando llamar XD")
                    if (user.password) {
                        const salt = await bcrypt.genSaltSync(10, 'a');
                        user.password = bcrypt.hashSync(user.password, salt);
                    }
                    if (user.sec_a) {
                        const salt = await bcrypt.genSaltSync(10, 'a');
                        user.sec_a = bcrypt.hashSync(user.sec_a, salt);
                    }
                } catch(error) {
                    const response = {
                        status: 500,
                        data: {},
                        error: {
                            message: "user match failed"
                        } 
                    };
                }
            }
        },
        afterUpdate: async(user) => {
            try {
                if (user.password) {
                    const salt = await bcrypt.genSaltSync(10, 'a');
                    user.password = bcrypt.hashSync(user.password, salt);
                }
            } catch(error) {
                const response = {
                    status: 500,
                    data: {},
                    error: {
                        message: "user match failed"
                    } 
                };
            }
        },
        instanceMethods: {
            validPassword: (password) => {
                return bcrypt.hashSync(password, this.password);
            },
            validSecA: (sec_a) => {
                return bcrypt.hashSync(sec_a, this.sec_a)
            }
        }
    })
    
    userSchema.prototype.validPassword = async (password, hash) => {
        return await bcrypt.compareSync(password, hash);
    }

    userSchema.prototype.validSecA = async (sec_a, hash) => {
        return await bcrypt.compareSync(sec_a, hash);
    }
};

module.exports = Usuario;
