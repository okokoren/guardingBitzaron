import volenteersRepository from '../repositories/volenteers.repository.js';

const addVolenteer = async (volenteer) => {
  return await volenteersRepository.addVolenteer(
    volenteer.name,
    volenteer.isArmed,
    volenteer.shift,
    volenteer.date
  );
};

const getVolenteersByDate = async (date) => {
  date.setHours(0, 0, 0, 0);
  const result = await volenteersRepository.getVolenteersByDate(date);

  return parseVolenteers(result);
};

const getVolenteersByDateRange = async (date, numOfDays) => {
  date.setHours(0, 0, 0, 0);
  const MAX_DAYS = 50;
  const endDate = new Date(date);

  endDate.setDate(endDate.getDate() + Math.min(numOfDays, MAX_DAYS));
  let dbResult = await volenteersRepository.getVolenteersByDateRange(
    date,
    endDate
  );

  dbResult = dbResult.map((volenteer) => [volenteer.date.getTime(), volenteer]);

  const dateSeperated = {};

  dbResult.forEach((volenteer) => {
    if (!dateSeperated[volenteer[0]]) {
      dateSeperated[volenteer[0]] = [volenteer[1]];
    } else {
      dateSeperated[volenteer[0]].push(volenteer[1]);
    }
  });

  Object.keys(dateSeperated).forEach((date) => {
    dateSeperated[date] = parseVolenteers(dateSeperated[date]);
  });

  return dateSeperated;
};

const removeVolenteer = async (volenteer) => {
  return await volenteersRepository.removeVolenteer(
    volenteer.name,
    volenteer.shift,
    new Date(parseInt(volenteer.date))
  );
};

const parseVolenteers = (data) => {
  const existingShifts = {};
  const result = data;
  for (const volenteer of result) {
    Object.defineProperty(
      volenteer,
      'isArmed',
      Object.getOwnPropertyDescriptor(volenteer, 'is_armed')
    );
    delete volenteer['is_armed'];
    if (volenteer.shift in existingShifts) {
      existingShifts[volenteer.shift]++;
    } else {
      existingShifts[volenteer.shift] = 0;
    }

    volenteer.volenteerNum = existingShifts[volenteer.shift];
  }

  return result;
};

export default {
  addVolenteer,
  getVolenteersByDate,
  removeVolenteer,
  getVolenteersByDateRange,
};
