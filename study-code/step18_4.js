var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended:false})

app.use('/aaa',express.static('test_res'));

app.get('/index',function(req,res){
    res.sendFile(`${__dirname}/test_res/login.html`)
});

app.get('/process_GETform',function(req,res){
    
    // 输出 JSON 格式
    var response = {
        "first_name":req.query.first_name,
        "last_name":req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));

});

app.post('/process_POSTform',urlencodedParser,function(req,res){
    
    // 输出 JSON 格式
    var response = {
        "first_name":req.body.first_name,
        "last_name":req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));

});

// var querystring = require('querystring');
// app.post('/process_POSTform',function(req,res){
//     var body = '';
//     req.on('data',function(chunk){
//         body += chunk;
//     })
//     req.on('end',function(){
//         body = querystring.parse(body);
//     })

//     // 输出 JSON 格式
//     var response = {
//         "first_name":body.first_name,
//         "last_name":body.last_name
//     };
//     console.log(response);
//     res.end(JSON.stringify(response));
// });

var cookieParser = require('cookie-parser');
var util = require('util');
app.use(cookieParser())

app.get('/cookietest',function(req,res){
    console.log(util.inspect(req.cookies));
})


var server = app.listen(8080);

