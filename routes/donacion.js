const router = require("express").Router();
const donacionController = require('../controllers/donacion');

router.post('/agregarDonacion;',donacionController.postAgregarDonacion);
router.get('/verDonacion;',donacionController.getDonacion);

module.exports = router;