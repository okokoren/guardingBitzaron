import { pool } from '../db.js';

const getVolenteersByDate = async (date) => {
  // TODO: implement query
  const results = await pool.query('');

  return results;
};

const addVolenteer = async (name, isArmed, shift, date) => {
  const result = await pool.query(
    'INSERT INTO volenteers (name, is_armed, shift, date) VALUES ($1, $2, $3, $4)',
    [name, isArmed, shift, date]
  );

  return result.rowCount > 0;
};

export default {
  addVolenteer,
};
