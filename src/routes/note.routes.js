'use strict';

// dependencies
const express = require('express');
const router = express.Router();

// import custom controllers
const noteController = require('../controllers/index.js');

// /GET - get all notes
router.get('/notes', noteController.listAll);

// /GET:id - get one note by id
router.get('/notes/:id', noteController.listOne);

// /POST - add new note
router.post('/notes', noteController.createNote);

// /PUT:id - update note via id
router.put('/notes/:id', noteController.updateNote);

// /DELETE:id - delete single note via id
router.delete('/notes/:id', noteController.deleteNote);

module.exports = router;