'use strict';

const db = require('../config/database.js');

const listAllNotes = async (req, res, next) => {
  const response = await db.query('SELECT * FROM notes ORDER BY note_title ASC');

  res.status(200).send(response.rows);
};

module.exports = listAllNotes;