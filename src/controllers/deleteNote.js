'use strict';

const db = require('../config/database.js');

const deleteNote = async (req, res, next) => {
  const note_id = +req.params.id;

  await db.query(
    "DELETE FROM notes WHERE note_id = $1",
    [note_id]
  );
  
  res.status(200).send({ message: 'Delete successful!' })
};

module.exports = deleteNote;