var mongoClient = require('mongodb').MongoClient;
var url = "mongodb://node:123456@10.10.100.20:27017/admin";

module.exports = {
    mongoConnect () {
        let p = new Promise((resolve,reject)=>{
            mongoClient.connect(url, {useUnifiedTopology: true}, (err,conn)=>{
                if(err) reject(err)
                else resolve(conn) 
            })
        })
        return p
    },
    mongoFind (conn,collection,condition) {
        let p = new Promise((resolve,reject)=>{
            console.log(0)
            conn.db("attendance_day")
            .collection(`"${collection}"`)
            .find({})
            .toArray(),(err,data)=>{
                if(err)reject(err)
                else {
                    console.log(1)
                    resolve(data)
                    
                }
            }
        })
        return p
    },
    mongoClose (conn){
        let p = new Promise((resolve,reject)=>{
            conn.close((err,data)=>{
                if(err)reject(err)
                else resolve(data)
            })
        })
        return p
    }
}