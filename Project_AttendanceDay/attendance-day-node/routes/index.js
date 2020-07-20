const usr = require("./usr");


module.exports = (app) =>{
    app.use("/usr",usr)
}