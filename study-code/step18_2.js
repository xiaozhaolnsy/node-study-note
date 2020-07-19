var express = require('express');
var app = express();

app.get('/',function(req,res){
    res.send('Hello GET');
});

app.post('/',function(req,res){
    res.send('Hello POST');
});

app.get('/del_user',function(req,res){
    res.send('删除页面');
});

app.get('/list_user',function(req,res){
    res.send('用户列表页面');
});

//对页面 abcd ab~~xxx~~cd等响应get请求
app.get('/ab*cd',function(req,res){
    res.send('正则匹配');
});

var server = app.listen(8080,function(){

    var host = server.address().address;
    var port = server.address().port;

    console.log(`应用实例访问地址：${host}:${port}`)
});