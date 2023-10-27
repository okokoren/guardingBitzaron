import { pool, schema } from '../db.js';

const getVolenteersByDate = async (date) => {
  const results = await pool.query(
    `SELECT * FROM ${schema}.volenteers WHERE date = $1`,
    [date]
  );

  return results.rows;
};

const getVolenteersByDateRange = async (startDate, endDate) => {
  const result = await pool.query(
    `SELECT * FROM ${schema}.volenteers WHERE date >= $1 AND date <= $2`,
    [startDate, endDate]
  );

  return result.rows;
};

const addVolenteer = async (name, isArmed, shift, date) => {
  const result = await pool.query(
    `INSERT INTO ${schema}.volenteers (name, is_armed, shift, date) VALUES ($1, $2, $3, $4)`,
    [name, isArmed, shift, date]
  );

  return result.rowCount > 0;
};

const removeVolenteer = async (name, shift, date) => {
  const result = await pool.query(
    `DELETE FROM ${schema}.volenteers WHERE name = $1 AND shift = $2 AND date = $3`,
    [name, shift, date]
  );

  return result.rowCount > 0;
};

export default {
  getVolenteersByDate,
  addVolenteer,
  removeVolenteer,
  getVolenteersByDateRange,
};
