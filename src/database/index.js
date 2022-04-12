'use strict';

const { Pool, Client } = require('pg');

// creates a reusable pool of client connections
const pool = new Pool({
  user: 'dev',
  host: 'localhost',
  database: 'notesapp',
  password: 'password',
  port: 5432,
});

// test that pool is connected and query notes tables, returning the results
pool.query(
  "SELECT * FROM notes;",
  (err, res) => {
  console.log(res.rows);
  pool.end();
});

// export a query for the db to be used throughout the project
module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
}