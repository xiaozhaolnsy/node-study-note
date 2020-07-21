const express = require('express');
const db = require('../util/mysql/db');

function getUsr(req,res){
    var sql = 'select * from usr_master'
    var arr = []
    db.sqlConnect(sql,arr,(err, data)=>{
        if(err){console.log(err)}
        else{res.send({'uid': 0 })}
    })
}

function checkUsr(req,res){
    var sql = `select uid from usr_login 
    where username = '${req.body.u}' 
    and password = ${req.body.p}`
    var arr = []
    db.sqlConnect(sql,arr,(err,data)=>{
        if(err){console.log(err)}
        else{
            if(data[0]){res.send({'uid': data[0].uid})}
            else{res.send({'uid': 0 })}
        }
    })
}

exports.getUsr = getUsr
exports.checkUsr = checkUsr