const router = require("express").Router();
const usuarioController = require('../controllers/usuario');

router.post('/loginUsuario',usuarioController.postLogin);
router.post('/agregarUsuario',usuarioController.postAgregarUsuario);
//router.post('/participar', usuarioController.postParticipar);
//router.get('/agregarUsuario',usuarioController.postAgregarUsuario);
router.get('/ids', usuarioController.getUserById);
router.get('/verUsuarios', usuarioController.getUserById);
router.get('/penis', usuarioController.penis);
router.get('/politicas',usuarioController.getPoliticas);

module.exports = router;