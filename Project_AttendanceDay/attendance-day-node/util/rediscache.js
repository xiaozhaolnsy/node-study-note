const redis = require('redis')

const client = redis.createClient(6379, '10.10.100.20')

function set(key, value){
    return new Promise((resolve,reject)=>{
        client.set(key, value, (err,data)=>{
            if(err)reject(err)
            else resolve(data)
        }),
        client.expire(key, 60, (err, data)=>{ // 有效期60s
            if(err)reject(err)
            else resolve(data)
        })
    })
}

function expire(key, time){
    return new Promise((resolve,reject)=>{
        client.expire(key, time, (err,data)=>{
            if(err)reject(err)
            else resolve(data)
        })
    })
}

function get(key){
    return new Promise((resolve,reject)=>{
        client.get(key, (err,data)=>{
            if(err)reject(err)
            else resolve(data)
        })
    })
}

module.exports = {set, get}
