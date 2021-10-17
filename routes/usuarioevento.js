const router = require("express").Router();
const usuarioeventoController = require('../controllers/usuarioevento');

router.post('/agregarUE', usuarioeventoController.postAgregarUE);
router.get('/getUserInUE', usuarioeventoController.getUserEvents);
module.exports = router;