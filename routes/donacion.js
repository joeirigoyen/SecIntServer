const router = require("express").Router();
const pRouter = require("express").Router();

const donacionController = require('../controllers/donacion');

router.get('/verDonacion;',donacionController.getDonacion);
router.post('/verDonaciones', donacionController.getDonaciones);
router.post('/agregarDonacion', donacionController.postAgregarDonacion);

module.exports = router;