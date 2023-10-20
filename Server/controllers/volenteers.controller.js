import httpStatus from 'http-status';

const getVolenteers = (req, res) => {
  res.status(httpStatus.OK).send('working');
};

export default {
  getVolenteers,
};
