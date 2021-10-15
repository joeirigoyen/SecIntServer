const router = require("express").Router();
const inversionistaController = require('../controllers/inversionista');

router.post('/loginInversionista',inversionistaController.postLogin);
router.post('/agregarInversionista',inversionistaController.postAgregarInversionista);
router.get('/agregarInversionista',inversionistaController.postAgregarInversionista);
router.get('/politicas',inversionistaController.getPoliticas);

module.exports = router;