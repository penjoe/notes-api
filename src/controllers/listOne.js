'use strict';

const db = require('../config/database.js');

const findNoteById = async (req, res, next) => {
  const note_id = +req.params.id;
  console.log('params', req.params.id);

  const response = await db.query('SELECT * FROM notes WHERE note_id = $1', [note_id]);

  res.status(200).send(response.rows);
};

module.exports = findNoteById;