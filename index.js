'use strict';

// dependencies
require('dotenv').config();

// import main server
const server = require('./src/server.js');

//start server function
server.start(process.env.PORT || 5001)