// const express = require('express')
// const db = require('../util/mysql/db')
const url = require('url')
const qs = require('querystring')
const model = require('../model/att')
const timecast = require('../util/timecast')

function getSta(req, res){
    let now = new Date()
    let date =  `${now.getFullYear()}-${now.getMonth()+1}-01`// 获取日期

    let query = url.parse(req.url).query
    let u = qs.parse(query)['u']

    // MYSQL
    // var sql = `select * from usr_attendance 
    // where uid = ${u} and time>'${date}' and status = 1`
    // var arr = []
    // db.sqlConnect(sql, arr, (err, data)=>{
    //     if(err){console.log(err)}
    //     else{
    //         var times = []
    //         data.forEach((item)=>{
    //             times.push(parseInt(item.time.substring(8,10)))
    //         })
    //         console.log(times)
    //         res.send({'list': times})
    //     }
    // })

    //MONGOOSE
    model.find({uid: u, status: 1,exectime: { $gt: new Date(date)}}).then((data)=>{
        var times = []
        data = timecast.parseUTCTimeList(data)
        console.log(data)
        data.forEach((item)=>{
            console.log(item)
            times.push(parseInt(item.exectime.substring(8,10)))
            console.log(times)
        })
        res.send({'list': times})
    })
    
}

exports.getSta = getSta