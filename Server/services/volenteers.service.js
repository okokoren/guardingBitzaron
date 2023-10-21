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

const removeVolenteer = async (volenteer) => {
  return await volenteersRepository.removeVolenteer(
    volenteer.name,
    volenteer.shift,
    new Date(parseInt(volenteer.date))
  );
};

export default {
  addVolenteer,
  getVolenteersByDate,
  removeVolenteer,
};
