// const db0 =require('../util/mysql/pdb') // MYSQL
const url = require('url')
const qs = require('querystring')
const model = require('../model/att')
const timecast = require('../util/timecast')

function getAtt(req, res){
    let now = new Date()
    let iso = now.toISOString()
    let date = now.toLocaleDateString() // 获取日期
    let query = url.parse(req.url).query
    let u = qs.parse(query)['u']

    // MYSQL
    // var sql = `select * from usr_attendance 
    // where uid = ${u} and time>'${date}'
    // order by time asc`
    // var arr = []
    //db0.exec(sql).then((data)=>res.send({'list':data}))
    
    // MONGO
    console.log(date)
    console.log(iso)
    model.find({uid:u, exectime: { $gt: new Date(date)}}).sort({exectime:1})
         .then(data=>{
            res.send({'list':timecast.parseUTCTimeList(data)})
         },(err)=>{console.log(err)})
}

function postAtt(req, res){
    let status = 0;
    let now = new Date()
    let date = now.toLocaleDateString() // 获取日期
    let datetime = now.toLocaleString() // 获取日期与时间
    let u = req.body.u

    // MYSQL
    // var sql = `select * from usr_attendance 
    // where uid = ${req.body.u} and time>'${date}'
    // order by time asc 
    // limit 1`
    // var arr = []
    // db.sqlConnect(sql,arr, (err, data) => {
    //     if(err){console.log(err)}
    //     else{
    //         if(data){
    //             if(data[0]){
    //                 let s1 = convertDateFromString(data[0].time).getTime() // 取得当天最早打卡时间 时间戳
    //                 let s2 = convertDateFromString(datetime).getTime() // 取得当前时间 时间戳
    //                 let total = (s2 - s1)/1000 // 计算时间差值 （单位 s秒）
    //                 let hour = total/60/60 // 转换工作小时
    //                 console.log(hour)
    //                 console.log(typeof hour)
    //                 if(hour > 8) {status = 1} // 如工作时间满8小时 status = 1;
    //             }
                
    //             let sql = `insert into usr_attendance 
    //             values(0, '${req.body.u}', '${datetime}', ${status})`
    //             console.log(`status  ${status}`)
    //             let arr = [];
    //             db.sqlConnect(sql,arr, (err, data) => {
    //                 if(err){console.log(err)}
    //                 else{
    //                     if(data){res.send({'success': 1})}
    //                     else{res.send()}
    //                 }
    //             })
    //         }
    //     }
    // })

    //MONGO
    model.find({uid:u, exectime: { $gt: new Date(date)}}).sort({exectime:1}).limit(1)
         .then(data => {
            if(data.length>0){
                // console.log(`data      `+data)
                let s1 = timecast.convertDateFromString(timecast.convertJSONToDateString(data[0].toString())) .getTime() // MONGO
                // let s1 = convertDateFromString(data[0].exectime).getTime() // 取得当天最早打卡时间 时间戳 MYSQL
                let s2 = timecast.convertDateFromString(datetime).getTime() // 取得当前时间 时间戳
                let total = (s2 - s1)/1000 // 计算时间差值 （单位 s秒）
                let hour = total/60/60-8 // 转换工作小时
                console.log(hour)
                if(hour > 8) {status = 1} // 如工作时间满8小时 status = 1;
            }
            let attModel = new model({
                uid: u,
                exectime: datetime,
                status: status
            })
            attModel.save().then(()=>{res.send({'success': 1}),()=>res.send()})
         })
}

exports.getAtt = getAtt
exports.postAtt = postAtt