const router = require("express").Router();

const usuarioController = require('../controllers/usuario');

router.post('/loginUsuario',usuarioController.postLogin);
router.post('/agregarUsuario',usuarioController.postAgregarUsuario);
router.post('/buscarUsuario', usuarioController.postGetUserExists);
router.post('/buscarPregunta', usuarioController.postGetSecQuestion);
router.post('/cambiarPassword', usuarioController.postNewPassword);
router.put('/cambiarPassword', usuarioController.putNewPassword);
router.put('/checkDate', usuarioController.isValidDate);
router.post('/existeUsername', usuarioController.getUsername);
//router.post('/participar', usuarioController.postParticipar);
//router.get('/agregarUsuario',usuarioController.postAgregarUsuario);
router.get('/ids', usuarioController.getUserById);
router.get('/verUsuarios', usuarioController.getUserById);
router.get('/politicas',usuarioController.getPoliticas);
router.get('/orgs', usuarioController.getOrgs);

module.exports = router;