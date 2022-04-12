'use strict';

// dependencies
const express = require('express');

// create instance of express
const app = express();

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set up test route
app.get('/', (req, res) => {
  res.status(200).send('Hello world')
});

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
}