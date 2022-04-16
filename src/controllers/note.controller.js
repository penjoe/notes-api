'use strict';

// connection to database i.e. pool.query()
const db = require('../config/database.js');

exports.createNote = async (req, res, next) => {
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

exports.listAllNotes = async (req, res, next) => {
  const response = await db.query('SELECT * FROM notes ORDER BY note_title ASC');

  res.status(200).send(response.rows);
};

exports.findNoteById = async (req, res, next) => {
  const note_id = +req.params.id;
  console.log('params', req.params.id);

  const response = await db.query('SELECT * FROM notes WHERE note_id = $1', [note_id]);

  res.status(200).send(response.rows);
};

exports.updateNote = async (req, res, next) => {
  const note_id = +req.params.id;
  const { note_title, note_text } = req.body;

  const response = await db.query(
    "UPDATE notes SET note_title = $1, note_text = $2 WHERE note_id = $3",
    [note_title, note_text, note_id]
  );

  res.status(200).send({ message: 'Update successful!' })
  
}