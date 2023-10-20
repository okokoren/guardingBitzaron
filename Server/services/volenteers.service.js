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
  const existingShifts = {};
  const result = await volenteersRepository.getVolenteersByDate(date);
  for (const volenteer of result) {
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
};
