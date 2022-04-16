'use strict';

// dependencies
const express = require('express');
const cors = require('cors');

// create instance of express
const app = express();

// import custom modules
const index = require('./routes/index.js');
const router = require('./routes/note.routes.js');

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// use express router
app.use(index);

// using express-promise-router
app.use('/api/v1', router);

// get server listening for requests
function start(port) {
  app.listen(port, () => {
    console.log(`server listening on port ${port}`);
  })
}

// export server
module.exports = {
  start,
  app
};