var express = require('express');
var app = express();

app.use('/aaa',express.static('test_res'));

app.get('/',function(req,res){
    res.send('Hello world');
});

var server = app.listen(8080,function(){

    var host = server.address().address;
    var port = server.address().port;

    console.log(`应用实例访问地址：${host}:${port}`)
});