const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended:false})

const usr = require('../dao/usr')

router.get('/', function(req, res) {
  usr.getUsr(req, res)
})

router.post('/',(req,res)=>{
  usr.checkUsr(req,res)
})

module.exports = router;
