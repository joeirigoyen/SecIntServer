const router = require("express").Router();
const usuarioController = require('../controllers/usuario');

router.post('/loginUsuario',usuarioController.postLogin);
router.post('/agregarUsuario',usuarioController.postAgregarUsuario);
router.post('/participar', usuarioController.postParticipar);
//router.get('/agregarUsuario',usuarioController.postAgregarUsuario);
router.get('/politicas',usuarioController.getPoliticas);

module.exports = router;