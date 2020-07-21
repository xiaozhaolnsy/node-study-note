const usr = require("./usr")
const att = require("./att")
const sta = require("./sta")

module.exports = (app) =>{
    app.use('/usr',usr),
    app.use('/att',att),
    app.use('/sta',sta)
}