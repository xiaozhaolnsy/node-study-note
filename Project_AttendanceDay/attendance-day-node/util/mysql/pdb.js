const db = require('./db')

module.exports = {
    exec(sql){
        let p = new Promise( (resolve,reject) => {
            db.sqlConnect(sql,(err,data)=>{
                if(err) reject(err)
                else resolve(data)
            })
        })
        return p
    }
}
