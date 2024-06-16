

module.exports.selectQuery = function(req,callback){
  
   if (req.body.username == "jairo123@gmail.com" && req.body.password == "123"){
        let token = "1" + "Jairo";
        let response = 200;
        let user = {
            nombre:"Jairo",
            person:{
                role:1,
                documentNumber:"00000000",
                fullName:"Jairo" +' '+ "Egusquiza"+ ' '+"Beron",
                profilePictureURL:null
            },
            id:1
        }
        callback({token,response,user});
   }
   else{
            let response = 200;
            let user = null;
            callback({user,response});
            // return(1);
   }

};