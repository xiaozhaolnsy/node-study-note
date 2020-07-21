const express = require('express');
const router = express.Router();

//引入staDAO
const att = require('../dao/sta')

//GET请求 取得统计数据
router.get('/', function(req, res) {
  att.getSta(req, res)
})

module.exports = router;
