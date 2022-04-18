'use strict';

const controllers = {
  listAll: require('./listAll.js'),
  listOne: require('./listOne.js'),
  createNote: require('./createNote.js'),
  updateNote: require('./updateNote.js'),
  deleteNote: require('./deleteNote.js')
};

module.exports = controllers;