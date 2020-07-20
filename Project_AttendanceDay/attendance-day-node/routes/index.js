const usr = require("./usr")
const att = require("./att")

module.exports = (app) =>{
    app.use('/usr',usr),
    app.use('/att',att)
}