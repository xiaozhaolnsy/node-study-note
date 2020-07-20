const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended:false})

const att = require('../service/att')

router.get('/', function(req, res, next) {
  att.getAtt(req, res)
})

router.post('/',urlencodedParser,(req,res)=>{
  att.postAtt(req,res)
})

module.exports = router;
