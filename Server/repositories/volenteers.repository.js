import { pool } from '../db.js';

const getVolenteersByDate = async (date) => {
  const results = await pool.query('SELECT * FROM volenteers WHERE date = $1', [
    date,
  ]);

  return results.rows;
};

const addVolenteer = async (name, isArmed, shift, date) => {
  const result = await pool.query(
    'INSERT INTO volenteers (name, is_armed, shift, date) VALUES ($1, $2, $3, $4)',
    [name, isArmed, shift, date]
  );

  return result.rowCount > 0;
};

export default {
  getVolenteersByDate,
  addVolenteer,
};
