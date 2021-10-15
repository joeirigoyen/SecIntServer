function applyRelations(sequelize){
    console.log(sequelize.models);
    const Usuario = sequelize.models.usuario;
    const Membresia = sequelize.models.membresia;
    const Evento = sequelize.models.evento;
    const Donacion = sequelize.models.donacion;
    const UsuarioEvento = sequelize.models.usuarioevento;
    const Proyecto = sequelize.models.proyecto;
    const UsuarioProyecto = sequelize.models.usuarioproyecto;

    //Un Usuario tiene muchas donaciones
    Usuario.hasMany(Donacion);
    //Una Membresia pertenece a un Usuario
    Usuario.belongsTo(Membresia);
    //Un Usuario puede tener varios Eventos
    Usuario.belongsToMany(Evento,{
        through:"UsuarioEvento",
        as: "eventos",
        foreignKey: "id_usuario",
        unique: false});
    //Un Evento puede tener varios Usuarios
    Evento.belongsToMany(Usuario,{
        through: "UsuarioEvento",
        as: "usuarios",
        foreignKey: "id_evento", 
        unique: false});
    //Un Usuario puede tener varios Proyectos
    Usuario.belongsToMany(Proyecto,{
        through: "UsuarioProyecto",
        as: "proyectos",
        foreignKey: "id_proyecto",
        unique: false});
    //Un Proyecto puede tener varios Usuarios
    Proyecto.belongsToMany(Usuario,{
        through: "UsuarioProyecto",
        as: "usuarios",
        foreignKey: "id_usuario",
        unique: false});
    
}

module.exports = {applyRelations};