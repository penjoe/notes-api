'use strict';

// dependencies
const express = require('express');
const router = express.Router();

// test route
router.get('/testme', (req, res) => {
  res.status(200).send({
    success: true,
    message: 'hello from the router!',
    version: '1.0.0'
  });
});

// /GET - get all notes

// /GET:id - get one note by id

// /POST - add new note

// /PUT:id - update note via id

// /DELETE:id - delete single note via id

module.exports = router;