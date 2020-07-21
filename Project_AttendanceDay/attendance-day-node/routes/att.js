const express = require('express');
const router = express.Router();

const att = require('../dao/att')

router.get('/', function(req, res) {
  att.getAtt(req, res)
})

router.post('/',(req,res)=>{
  att.postAtt(req,res)
})

module.exports = router;
