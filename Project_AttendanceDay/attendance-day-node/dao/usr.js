const express = require('express');
const db = require('../util/db');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended:false})

function getUsr(req,res){
    var sql = 'select * from usr_master';
    var arr = [];
    var callBack = (err,data)=>{
        if(err){console.log('db error')}
        else{res.send({'list': data})}
    }
    db.sqlConnect(sql,arr,callBack);
}

function checkUsr(req,res){
    var sql = `select uid from usr_login 
    where username = '${req.body.u}' 
    and password = ${req.body.p}`
    var arr = [];
    db.sqlConnect(sql,arr,(err,data)=>{
        if(err){console.log(err)}
        else{
            if(data[0]){res.send({'data': data[0].uid})}
            else{res.send({'data': 0 })}
        }
    })
}

exports.getUsr = getUsr
exports.checkUsr = checkUsr