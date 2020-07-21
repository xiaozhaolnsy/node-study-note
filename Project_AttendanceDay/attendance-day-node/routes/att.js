const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended:false})

const att = require('../dao/att')

router.get('/', function(req, res) {
  att.getAtt(req, res)
})

router.post('/',urlencodedParser,(req,res)=>{
  att.postAtt(req,res)
})

module.exports = router;
