'use strict';

// dependencies
require('dotenv').config();

// import main server
const server = require('./src/server.js');

// import postgres connection
const pg = require('./src/database/index.js');

//start server function
server.start(process.env.PORT || 5001)