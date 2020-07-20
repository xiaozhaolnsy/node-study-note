const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended:false})

const usr = require('../service/usr')

router.get('/', function(req, res, next) {
  usr.getUsr(req, res)
})

router.post('/',urlencodedParser,(req,res)=>{
  usr.checkUsr(req,res)
})

module.exports = router;
