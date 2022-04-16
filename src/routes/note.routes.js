'use strict';

// dependencies
const router = require('express-promise-router')();

// import custom controllers
const noteController = require('../controllers/note.controller.js');

// /GET - get all notes
router.get('/notes', noteController.listAllNotes);

// /GET:id - get one note by id
router.get('/notes/:id', noteController.findNoteById);

// /POST - add new note
router.post('/notes', noteController.createNote);

// /PUT:id - update note via id
router.put('/notes/:id', noteController.updateNote);

// /DELETE:id - delete single note via id

module.exports = router;