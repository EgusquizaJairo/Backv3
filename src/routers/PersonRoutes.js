var express= require('express');
var router = express.Router();

var controller = require('../controllers/PersonController.js');

// router.post('/employee/query', function(req,res){
//    controller.EmployeeSelect(req,res);
// });

// router.post('/employee/new',function(req,res){
//    controller.EmployeeNew(req,res);
// })
// router.post('/employee/update/mini',function(req,res){
//    controller.EmployeeUpdateMini(req,res);
// })
// router.post('/employee/update',function(req,res){
//    controller.EmployeeUpdate(req,res);
// })

router.post('/client/query',function(req,res){
   controller.ClientSelect(req,res);
})

// router.post('/client/new',function(req,res){
//    controller.ClientNew(req,res);
// })



router.post('/client/update',function(req,res){
   controller.ClientUpdate(req,res);
})

// router.post('/client/card',function(req,res){
//    controller.ClientSelectCard(req,res);
// })


module.exports = router;