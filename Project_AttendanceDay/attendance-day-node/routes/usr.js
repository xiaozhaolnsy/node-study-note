const express = require('express');
const router = express.Router();

//引入usrDAO
const usr = require('../dao/usr')

//GET请求 测试接口 取得所有用户
router.get('/', function(req, res) {
  usr.getUsr(req, res)
})

//POST请求 验证用户
router.post('/',(req,res)=>{
  usr.checkUsr(req,res)
})

module.exports = router;
