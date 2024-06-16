var express= require('express');
var router = express.Router();

var controller = require('../controllers/LoginController.js');

router.post('/login', function(req,res){
   controller.logIn(req,res);
});

module.exports = router;