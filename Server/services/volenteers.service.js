import volenteersRepository from '../repositories/volenteers.repository.js';

const addVolenteer = async (volenteer) => {
  console.log(volenteer);
  return await volenteersRepository.addVolenteer(
    volenteer.name,
    volenteer.isArmed,
    volenteer.shift,
    volenteer.date
  );
};

export default {
  addVolenteer,
};
