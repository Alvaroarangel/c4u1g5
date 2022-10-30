//import { routes } from '../app';

const { Router } = require('express');
const controllerChocolate=require('../controllers/ControllerChocolate');
const router = Router();

router.get('/buscar/:', controllerChocolate.buscarData);
router.get('/buscarall/:idb?', controllerChocolate.listarAllData);
router.post('/crear', controllerChocolate.saveChocolate);
router.delete('/deleteChocolate/:id',controllerChocolate.deleteChocolate);
router.put('/updateChocolate/:id',controllerChocolate.updateChocolate);

module.exports = router;