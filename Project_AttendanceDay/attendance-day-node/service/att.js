const att = require('../dao/att')



function getAtt(req, res){
    let now = new Date()
    let date = now.toLocaleDateString() // 获取日期
    att.getAtt(req, res, date)
}

function postAtt(req,res){
    let now = new Date()
    let date = now.toLocaleDateString() // 获取日期
    let datetime = now.toLocaleString() // 获取日期与时间
    att.postAtt(req, res, date, datetime)
}

exports.getAtt = getAtt;
exports.postAtt = postAtt;