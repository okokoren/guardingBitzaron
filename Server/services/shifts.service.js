import shiftsRepository from '../repositories/shifts.repository.js';

const fetchShifts = async () => {
  return await shiftsRepository.fetchShiftsFromDb();
};

export default {
  fetchShifts,
};
