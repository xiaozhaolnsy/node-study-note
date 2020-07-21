const express = require('express');
const router = express.Router();

const att = require('../dao/sta')

router.get('/', function(req, res) {
  att.getSta(req, res)
})

module.exports = router;
