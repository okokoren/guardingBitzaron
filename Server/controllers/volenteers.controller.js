import httpStatus from 'http-status';
import volenteersService from '../services/volenteers.service.js';

const getVolenteers = async (req, res, next) => {
  try {
    const result = await volenteersService.getVolenteersByDate(
      new Date(parseInt(req.params.dateEpoch))
    );

    res.status(httpStatus.OK).send(result);
  } catch (error) {
    next(error);
  }
};

const addVolenteer = async (req, res, next) => {
  try {
    if (await volenteersService.addVolenteer(req.body)) {
      res.status(httpStatus.CREATED).send();
    } else {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send();
    }
  } catch (error) {
    next(error);
  }
};

export default {
  getVolenteers,
  addVolenteer,
};
