import express from 'express';
import volenteersController from '../controllers/volenteers.controller.js';

const router = express.Router();

router.route('/').get(volenteersController.getVolenteers);

export default router;
