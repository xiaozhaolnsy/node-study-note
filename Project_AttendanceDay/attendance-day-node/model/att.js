var mongoose = require('../util/mongo/db');

var Schema = mongoose.Schema;

//usr_attendance集合结构
var attSchema = new Schema({
    uid: Number,
    time: Date,
    status: Number
})

//创建模型 (模型名，视图，集合名)
var att = mongoose.model('att', attSchema, 'usr_attendance');

module.exports = att



