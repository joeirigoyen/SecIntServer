const router = require("express").Router();
const membresiaController = require('../controllers/membresia');

router.post('/agregarMembresia',membresiaController.postAgregarMembresia);
router.get('/verMembresia',membresiaController.getMembresia);

module.exports = router;