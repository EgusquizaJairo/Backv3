var dbModel= require('../models/LoginModel.js');
// var url = require('url');

module.exports.logIn =  function(req, res) {  
     
    dbModel.selectQuery(req,function (result){ 
        res.status(result.response).json(result)
        // res.send({"data":result,"status":500});
    }); 
}