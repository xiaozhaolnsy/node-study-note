const mysql = require('mysql');

module.exports = {
    //配置
    config:{
        host:'10.10.100.20',
        port:'3306',
        user:'root',
        password:'123456',
        database:'attendance_day'
    },
    //连接
    sqlConnect:function(sql,sqlArr,callBack){
        var pool = mysql.createPool(this.config)
        pool.getConnection((err,conn)=>{
            console.log('12345');
            if(err){
                console.log('conn err');return;
            }
            //驱动回调
            conn.query(sql,sqlArr,callBack);
            //释放连接
            conn.release();
        })
    }


}