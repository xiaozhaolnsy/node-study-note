const usr = require("./usr")
const att = require("./att")
const sta = require("./sta")

//整合子路由
module.exports = (app) =>{
    app.use('/usr',usr),
    app.use('/att',att),
    app.use('/sta',sta)
}