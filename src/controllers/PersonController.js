var dbModel= require('../models/PersonModel.js');
// var url = require('url');

// module.exports.EmployeeSelect =  function(req, res) {  
     
//     dbModel.selectQuery(req,function (result){ 
//         res.status(result.response).json(result)
//     }); 
// }

// module.exports.EmployeeNew =  function(req, res) {  
    
//     dbModel.insertQueryEmployee(req,function (result){ 
//         res.status(result.response).json(result)
//     }); 
// }

// module.exports.EmployeeUpdateMini =  function(req, res) {  
    
//     dbModel.updateMiniQueryEmployee(req,function (result){ 
//         res.status(result.response).json(result)
//     }); 
// }

// module.exports.EmployeeUpdate =  function(req, res) {  
    
//     dbModel.updateQueryEmployee(req,function (result){ 
//         res.status(result.response).json(result)
//     }); 
// }


module.exports.ClientSelect =  function(req, res) {  
     
    dbModel.selectQueryClient(req,function (result){ 
        res.status(result.response).json(result)
    }); 
}

// module.exports.ClientNew =  function(req, res) {  
    
//     dbModel.insertQueryClient(req,function (result){ 
//         res.status(result.response).json(result)
//     }); 
// }


module.exports.ClientUpdate =  function(req, res) {  
    
    dbModel.updateQueryClient(req,function (result){ 
        res.status(result.response).json(result)
    }); 
}

// module.exports.ClientSelectCard =  function(req, res) {  
    
//     dbModel.selectQueryClientCard(req,function (result){ 
//         res.status(result.response).json(result)
//     }); 
// }