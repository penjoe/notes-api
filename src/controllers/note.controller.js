'use strict';

// connection to database i.e. pool.query()
const db = require('../config/database.js');

exports.createNote = async (req, res, next) => {
  const { noteTitle, noteText } = req.body;
  // console.log('req.body', req.body);
  const { rows } = await db.query(
    "INSERT INTO notes (noteTitle, noteText) VALUES ($1, $2)",
    [noteTitle, noteText]
  );

  res.status(201).send({
    message: 'Note saved successfully!',
    body: {
      note: { noteTitle, noteText }
    },
  });
};