'use strict';

const db = require('../config/database.js');

const createNote = async (req, res, next) => {
  const { note_title, note_text } = req.body;
  // console.log('req.body', req.body);
  const { rows } = await db.query(
    "INSERT INTO notes (note_title, note_text) VALUES ($1, $2)",
    [note_title, note_text]
  );

  res.status(201).send({
    message: 'Note saved successfully!',
    body: {
      note: { note_title, note_text }
    },
  });
};

module.exports = createNote;