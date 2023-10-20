import express from 'express';
import volenteersController from '../controllers/volenteers.controller.js';

const router = express.Router();

router.route('/').get(volenteersController.getVolenteers);
router.route('/').post(volenteersController.addVolenteer);

export default router;
