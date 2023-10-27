import { pool, schema } from '../db.js';

const fetchShiftsFromDb = async () => {
  const result = await pool.query(
    `SELECT * FROM ${schema}.shifts ORDER BY start_hour ASC`
  );

  return result.rows;
};

export default {
  fetchShiftsFromDb,
};
