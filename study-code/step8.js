var fs = require('fs');
var data = '';

//创建可读流
var readerStream = fs.createReadStream('目录.txt');

//设置编码UTF-8
readerStream.setEncoding('utf-8');

//处理流事件 -> data,end,and error
readerStream.on('data',function(chunk){
    data += chunk;
});

readerStream.on('end',function(){
    console.log(data);
});

readerStream.on('error',function(err){
    console.log(err.stack);
});

console.log("程序执行完毕");


//写入流

var fs = require("fs");
var data = '菜鸟教程官网地址：www.runoob.com';

// 创建一个可以写入的流，写入到文件 output.txt 中
var writerStream = fs.createWriteStream('test_res/output.txt');

// 使用 utf8 编码写入数据
writerStream.write(data,'utf-8');

// 标记文件末尾
writerStream.end();

// 处理流事件 --> data, end, and error
writerStream.on('finish',function(){
    console.log("写入完成");
});

writerStream.on('error',function(err){
    console.log(err.stack);
});

console.log("程序执行完毕");



//pipe

var fs = require("fs");
// 创建一个可读流
var readerStream = fs.createReadStream('test_res/input.txt');

// 创建一个可写流
var writerStream = fs.createWriteStream('test_res/output.txt');

// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readerStream.pipe(writerStream);

console.log("程序执行完毕");

var fs = require("fs");
var zlib = require('zlib');

// 压缩 input.txt 文件为 input.txt.gz
fs.createReadStream('test_res/input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('test_res/input.txt.gz'));
  
console.log("文件压缩完成。");

fs.createReadStream('test_res/input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('test_res/input2.txt'));
  
console.log("文件解压完成。");