// 导入mongoose 模块
var mongoose = require('mongoose')

// 设置mongodb 连接地址
const mongoURL ="mongodb://node:123456@10.10.100.20:27017/attendance_day?authSource=admin"

// 连接mongodb 设置
mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// 获取连接信息 并输出
var db = mongoose.connection;
// console.log(db)

// 测试是否连接上
db.on('error', console.error.bind(console, 'mongodb connection error:'));

db.once('open', function() {
    console.log("mongodb connection success！")
})

module.exports = mongoose;



















