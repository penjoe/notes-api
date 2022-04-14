'use strict';

const { Pool } = require('pg');

// creates a reusable pool of client connections
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

// test that pool is connected and query notes tables, returning the results
pool.on('connect', () => {
  console.log('Database connection successful!');
});

// pool.query('SELECT NOW()', (err, res) => {
//   console.log(res)
//   pool.end();
// });

// export a query for the db to be used throughout the project
module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
};