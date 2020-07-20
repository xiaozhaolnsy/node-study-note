const usr = require('../dao/usr')

function getUsr(req, res){
    usr.getUsr(req, res);
}

function checkUsr(req,res){
    usr.checkUsr(req,res);
}

exports.getUsr = getUsr;
exports.checkUsr = checkUsr;