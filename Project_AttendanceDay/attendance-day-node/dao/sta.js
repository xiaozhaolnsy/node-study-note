const express = require('express')
const db = require('../util/db')
const url = require('url')
const qs = require('querystring')

function getSta(req, res){
    let now = new Date()
    let date =  `${now.getFullYear()}-${now.getMonth()+1}-01`// 获取日期

    let query = url.parse(req.url).query
    let u = qs.parse(query)['u']

    var sql = `select * from usr_attendance 
    where uid = ${u} and time>'${date}' and status = 1`
    var arr = []
    db.sqlConnect(sql, arr, (err, data)=>{
        if(err){console.log(err)}
        else{
            var times = []
            data.forEach((item)=>{
                times.push(parseInt(item.time.substring(8,10)))
            })
            console.log(times)
            res.send({'list': times})
        }
    })
    
}

exports.getSta = getSta