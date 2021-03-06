//Node.js 有多个内置的事件，我们可以通过引入 events 模块，
//并通过实例化 EventEmitter 类来绑定和监听事件

//在 Node 应用程序中，执行异步操作的函数将回调函数作为最后一个参数
//回调函数接收错误对象作为第一个参数

// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

// 创建事件处理程序
var connectHandler = function connected() {
    console.log('连接成功。');
   
    // 触发 data_received 事件 
    eventEmitter.emit('data_received');
 }

// 绑定 connection 事件处理程序
eventEmitter.on('connection', connectHandler);
 
// 使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received', function(){
   console.log('数据接收成功。');
});

console.log('1');

// 触发 connection 事件 
eventEmitter.emit('connection');
 
console.log("程序执行完毕。");