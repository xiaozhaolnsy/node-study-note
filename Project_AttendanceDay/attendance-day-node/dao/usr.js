// const express = require('express');
// const db = require('../util/mysql/db');
const model = require('../model/usr')
const redis = require('../util/rediscache')

function getUsr(req,res){
    // MYSQL
    // var sql = 'select * from usr_master'
    // var arr = []
    // db.sqlConnect(sql,arr,(err, data)=>{
    //     if(err){console.log(err)}
    //     else{res.send({'uid': 0 })}
    // })
}

function checkUsr(req,res){
    // MYSQL
    // var sql = `select uid from usr_login 
    // where username = '${req.body.u}' 
    // and password = ${req.body.p}`
    // var arr = []
    // db.sqlConnect(sql,arr,(err,data)=>{
    //     if(err){console.log(err)}
    //     else{
    //         if(data[0]){res.send({'uid': data[0].uid})}
    //         else{res.send({'uid': 0 })}
    //     }
    // })

    //MONGO
    model.find({username: req.body.u, password: req.body.p},{_id: 1, uid: 1}).then((data)=>{
        if(data.length == 1){
            let id = data[0]._id.toString(), uid = data[0].uid.toString()
            res.cookie('userinfo',{'uid': uid, 'id': id},{signed: false, maxAge: 60 * 1000, httpOnly: true})
            redis.set(id, uid)
            res.send(`{"uid":"${uid}"}`)
        }
        else
            res.send()
    })
}

exports.getUsr = getUsr
exports.checkUsr = checkUsr