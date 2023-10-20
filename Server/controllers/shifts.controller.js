import httpStatus from 'http-status';
import shiftsService from '../services/shifts.service.js';

const getShifts = async (req, res, next) => {
  try {
    const result = await shiftsService.fetchShifts();

    res.status(httpStatus.OK).send(result);
  } catch (error) {
    next(error);
  }
};

export default {
  getShifts,
};
