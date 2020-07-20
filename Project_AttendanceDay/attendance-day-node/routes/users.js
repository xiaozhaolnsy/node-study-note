var express = require('express');
var router = express.Router();
const db = require('../util/db');

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  var sql = 'select * from usr_master';
  var arr = [];
  var callBack = (err,data)=>{
    if(err){console.log('db error')}
    else{res.send({'list': data})}
  }
  db.sqlConnect(sql,arr,callBack);

});

module.exports = router;
