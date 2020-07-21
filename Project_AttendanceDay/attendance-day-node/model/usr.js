var mongoose = require('../util/mongo/db');

var Schema = mongoose.Schema;

//usr_login集合结构
var usrSchema = new Schema({
    uid: Number,
    username: String,
    password: String,
    email: String
})

//创建模型 (模型名，视图，集合名)
var usr = mongoose.model('usr', usrSchema, 'usr_login');

module.exports = usr



