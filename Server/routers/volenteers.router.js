import express from 'express';
import volenteersController from '../controllers/volenteers.controller.js';

const router = express.Router();

router.route('/:dateEpoch').get(volenteersController.getVolenteers);
router.route('/:dateEpoch/:days').get(volenteersController.getVolenteersRange);
router.route('/').post(volenteersController.addVolenteer);
router.route('/').delete(volenteersController.removeVolenteer);

export default router;
