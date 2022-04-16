'use strict';

const express = require('express');

const router = express.Router();

router.get('/testme', (req, res) => {
  res.status(200).send({
    success: true,
    message: 'hello from the router!',
    version: '1.0.0'
  });
});

module.exports = router;