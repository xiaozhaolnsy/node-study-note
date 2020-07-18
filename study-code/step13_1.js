const util = require('util');


// 正常返回
async function fn() {
  return 'hello world';
}
const callbackFunction = util.callbackify(fn);

callbackFunction((err, ret) => {
  if (err) throw err;
  console.log(ret);
});


//返回拒绝
function fn1() {
    return Promise.reject(null);
  }

const callbackFunction1 = util.callbackify(fn1);
  
callbackFunction1((err, ret) => {
    // 当 Promise 被以 `null` 拒绝时，它被包装为 Error 并且原始值存储在 `reason` 中。
    err && err.hasOwnProperty('reason') && err.reason === null;  // true
});