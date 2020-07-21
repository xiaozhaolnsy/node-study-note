const express = require('express');
const router = express.Router();

//引入attDAO
const att = require('../dao/att')

//GET请求 取得打卡数据
router.get('/', function(req, res) {
  att.getAtt(req, res)
})

//POST请求 记录打卡
router.post('/',(req,res)=>{
  att.postAtt(req,res)
})

module.exports = router;
