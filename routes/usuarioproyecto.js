const router = require("express").Router();
const usuarioproyectoController = require('../controllers/usuarioproyecto');

router.post('/agregarUP',usuarioproyectoController.postAgregarUP);
module.exports = router;