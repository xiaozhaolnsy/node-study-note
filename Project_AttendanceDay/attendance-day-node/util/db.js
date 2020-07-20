const mysql = require('mysql');

module.exports = {
    //配置
    config:{
        host: '10.10.100.20',
        port: '3306',
        user: 'node',
        password: '123456',
        database: 'attendance_day',
        timezone: '+08:00', //东八时区
        dateStrings : true //解决时间格式
    },
    //连接
    sqlConnect:function(sql,sqlArr,callBack){
        var pool = mysql.createPool(this.config)
        pool.getConnection((err,conn)=>{
            if(err){console.log(err);return;}
            //驱动回调
            conn.query(sql,sqlArr,callBack);
            //释放连接
            conn.release();
        })
    }


}