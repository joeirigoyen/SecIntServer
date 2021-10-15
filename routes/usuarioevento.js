const router = require("express").Router();
const usuarioeventoController = require('../controllers/usuarioevento');

router.post('/agregarUE',usuarioeventoController.postAgregarUE);
module.exports = router;