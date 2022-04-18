'use strict';

const db = require('../config/database.js');

const updateNote = async (req, res, next) => {
  const note_id = +req.params.id;
  const { note_title, note_text } = req.body;

  await db.query(
    "UPDATE notes SET note_title = $1, note_text = $2 WHERE note_id = $3",
    [note_title, note_text, note_id]
  );

  res.status(200).send({ message: 'Update successful!' })
};

module.exports = updateNote;