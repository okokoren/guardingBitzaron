import express from 'express';
import shiftsController from '../controllers/shifts.controller.js';

const router = express.Router();

router.route('/').get(shiftsController.getShifts);

export default router;
