var fs = require("fs");

// 阻塞
// var data = fs.readFileSync('目录.txt');
// console.log(data.toString());

//非阻塞
fs.readFile('目录.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("程序执行结束!");

//在非阻塞状态下，“程序执行结束”将会先打印