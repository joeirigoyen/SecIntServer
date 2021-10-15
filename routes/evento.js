const router = require("express").Router();
const eventoController = require('../controllers/evento');

router.post('/agregarEvento', eventoController.postAgregarEvento);
router.get('/verEventos', eventoController.getEventos);
router.post('/verEvento', eventoController.postEvento);
router.post('/verEventosPorOrg', eventoController.postFindEventosByOrg);

module.exports = router;