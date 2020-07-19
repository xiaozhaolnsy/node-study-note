var http = require('http');
var fs = require('fs');
var url = require('url');
var util = require('util');
 
 
// 创建服务器
http.createServer(function(req,res){

    // 解析请求，包括文件名
    var urlinfo = url.parse(req.url);
    var pathname = urlinfo.pathname;
    // 输出请求的文件名
    console.log("Request for " + pathname + " received.");
   
    // 从文件系统中读取请求的文件内容
    //if(pathname.length == 1) pathname = '/index';
    fs.readFile(`./test_res/${pathname.substr(1)}`,function(err,data){
        // HTTP 状态码: 404 : NOT FOUND
        // Content Type: text/html
        if(err){
            res.writeHead(404,{'Content-Type':'text/html'});
         }
       
        // HTTP 状态码: 200 : OK
        // Content Type: text/html
        else{
            res.writeHead(200,{'Content-Type':'text/html'});
            
            // 响应文件内容
            // res.write(util.inspect(data));
            // console.log(util.inspect(data,"true"));
            // console.log(data.toString());
            res.write(data.toString());
        }
         
      //  发送响应数据
      res.end();
    });

}).listen(8080);
// 控制台会输出以下信息
console.log('Server running at http://127.0.0.1:8080/');