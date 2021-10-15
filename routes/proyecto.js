const router = require("express").Router();
const proyectoController = require('../controllers/proyecto');

router.post('/agregarProyecto',proyectoController.postAgregarProyecto);
router.get('/verProyectos',proyectoController.getProyectos);
router.post('/verProyecto', proyectoController.postProyecto);

module.exports = router;