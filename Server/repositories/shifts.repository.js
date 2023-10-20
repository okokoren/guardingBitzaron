import { pool } from '../db.js';

const fetchShiftsFromDb = async () => {
  const result = await pool.query('SELECT * FROM shifts');

  return result.rows;
};

export default {
  fetchShiftsFromDb,
};
