const express = require('express')
const db = require('../util/db')
const url = require('url')
const qs = require('querystring')

function getAtt(req, res, date){
    let query = url.parse(req.url).query
    let u = qs.parse(query)['u']

    console.log(u)
    var sql = `select * from usr_attendance 
    where uid = ${u} and time>'${date}'
    order by time asc`
    var arr = [];
    var callBack = (err, data)=>{
        if(err){console.log(err)}
        else{res.send({'list': data})}
    }
    db.sqlConnect(sql, arr, callBack);
}

function postAtt(req, res, date, datetime){
    var status = 0;

    var sql = `select * from usr_attendance 
    where uid = ${req.body.u} and time>'${date}'
    order by time asc 
    limit 1`
    var arr = [];
    db.sqlConnect(sql,arr, (err, data) => {
        if(err){console.log(err)}
        else{
            if(data){
                let s1 = convertDateFromString(data[0].time).getTime() // 取得当天最早打卡时间 时间戳
                let s2 = convertDateFromString(datetime).getTime() // 取得当前时间 时间戳
                let total = (s2 - s1)/1000 // 计算时间差值 （单位 s秒）
                let hour = total/60/60 // 转换工作小时
                console.log(hour)
                console.log(typeof hour)
                if(hour > 8) {status = 1} // 如工作时间满8小时 status = 1;
                console.log(status)
                
                let sql = `insert into usr_attendance 
                values(0, '${req.body.u}', '${datetime}', ${status})`
                console.log(`status  ${status}`)
                let arr = [];
                db.sqlConnect(sql,arr, (err, data) => {
                    if(err){console.log(err)}
                    else{
                        if(data){res.send({'success': 1})}
                        else{res.send()}
                    }
                })
            }
        }
    })

    
}

//时间转换 string转date yyyy-mm-dd hh:mm:ss
function convertDateFromString(dateString) { 
    if (dateString) { 
    let arr1 = dateString.split(" ")
    let sdate = arr1[0].split('-')
    let stime = arr1[1].split(':')
    let date = new Date(sdate[0], sdate[1]-1, sdate[2], stime[0], stime[1], stime[2])
    return date
    }
}

exports.getAtt = getAtt
exports.postAtt = postAtt