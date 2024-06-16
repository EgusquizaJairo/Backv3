// var con = require('../config/db');
const route = './python/inicio.py'

// module.exports.selectQuery = function(req,callback){
  
//     // const sqlSelect = "SELECT * FROM empleado WHERE correo = ? AND contrasenha=SHA2(?,224)";
//     const sqlSelect = "SELECT * FROM empleado " +
//      "WHERE nombres LIKE ? "+
//      "AND apellido_p LIKE ? "+
//      "AND nro_documento LIKE ? "+
//      "AND habilitado = ?";
//      //console.log(req.body.nombre);
//     let activo = req.body.suspended == 0 ? 1:0;
//     let nombre = "%"+req.body.nombre+"%";
//     let apellido = "%"+req.body.apellido_p+"%";
//     let nro = "%"+req.body.nro_documento+"%";
//     con.query(sqlSelect,
//         [ nombre,
//         apellido,
//         nro,
//         activo]
//         ,function(err,result){
//         if(err){
//             let response = 500;
//             callback({response});
//             throw err;
//         }
//         //console.log();
//         // if(result.length==0){
//         //     let response = 200;
//         //     let total = result.length;
//         //     let list = result;
//         //     callback({response,total,list});
//         //     return(1);
//         // }
//         // let token = result[0].id_empleado + result[0].nombres;
//         let response = 200;
//         let total = result.length;
//         let list = result;
//         // console.log(list);
//         callback({response,total,list});
//     });
// };

// module.exports.insertQueryEmployee = function(req,callback){
  
//     // const sqlSelect = "SELECT * FROM empleado WHERE correo = ? AND contrasenha=SHA2(?,224)";
//     // Primero consultamos si alguien con mismo tipo de doc y nro o si hay alguien con ese usuario
//     // const sqlSelect1 = 'SELECT * FROM empleado WHERE id_documento = ? AND nro_documento = ?';
//     // con.query(sqlSelect1,[values[0][0]],function(err,result){
//     //     if(err){
//     //         let response = 500;
//     //         callback({response});
//     //         throw err;
//     //     }
//     //     if(result.length==0){
//     //         let response = 200;
//     //         let total = 0;
//     //         callback({total,response});
//     //         return(1);
//     //     }
//     //     // let token = result[0].id_empleado + result[0].nombres;
//     //     let response = 200;
//     //     let total = result.length;
//     //     let list = result;
//     //     // console.log(list);
//     //     callback({response,total,list});
//     // });
//     ///ASI NOMAS GAAA
//     //const sqlSelect2 = 'SELECT * FROM empleado WHERE correo = ?';
//     ////////////

//     ///////////
//     //const sqlSelect3 = 'SELECT * FROM empleado WHERE usuario = ?';



//     /////////////////////
//     const sqlInsert = "INSERT INTO empleado VALUES (?,?,?,?,?,?,?,SHA2(?,224),?,?,?,?,?,?,?,?,?)";
//     // const sqlSelect = "SELECT * FROM empleado WHERE habilitado = ?";
//     // let activo = req.body.suspended == 0 ? 1:0;
//     var fecha = new Date(req.body.fecha_nac.replace('T', ' ').replace('Z', ''))
//     var values = [[0,
//                    req.body.id_sexo,
//                    req.body.id_documento, 
//                    req.body.id_cargo,
//                    req.body.id_sala,
//                    1,
//                    req.body.usuario,
//                    req.body.contrasenha,
//                    req.body.nombres, 
//                    req.body.apellido_p,
//                    req.body.apellido_m, 
//                    fecha,
//                    req.body.nro_documento,
//                    req.body.telefono,
//                    req.body.telefono,
//                    req.body.correo,
//                    req.body.direccion
//     ]];
//     console.log(values);
//     con.query(sqlInsert,[values[0][0],
//                 values[0][1],
//                 values[0][2],
//                 values[0][3],
//                 values[0][4],
//                 values[0][5],
//                 values[0][6], 
//                 values[0][7],
//                 values[0][8],
//                 values[0][9],
//                 values[0][10],
//                 values[0][11],
//                 values[0][12],
//                 values[0][13],
//                 values[0][14],
//                 values[0][15],
//                 values[0][16],
//           ]
//         ,function(err,result){
//         if(err){
//             let response = 500;
//             callback({response});
//             throw err;
//         }
//         // let token = result[0].id_empleado + result[0].nombres;
//         let response = 200;
//         //let total = result.length;
//         //let list = result;
//         // console.log(list);
//         callback({response,result});
//     });
// };

// module.exports.updateMiniQueryEmployee = function(req,callback){
  
//     // const sqlSelect = "SELECT * FROM empleado WHERE correo = ? AND contrasenha=SHA2(?,224)";
//     const sqlUpdate = "UPDATE empleado SET habilitado = ? WHERE id_empleado = ?";
//     // let activo = req.body.suspended == 0 ? 1:0;
//     // var values = [[activo]];
//     con.query(sqlUpdate,[req.body.tipo,req.body.id_empleado],function(err,result){
//         if(err){
//             let response = 500;
//             callback({response});
//             throw err;
//         }
//         // if(result.length==0){
//         //     let response = 200;
//         //     let total = 0;
//         //     callback({total,response});
//         //     return(1);
//         // }
//         // let token = result[0].id_empleado + result[0].nombres;
//         let response = 200;
//         // let total = result.length;
//         // let list = result;
//         // console.log(list);
//         callback({response,result});
//     });
// };

// module.exports.updateQueryEmployee = function(req,callback){
  
//     // const sqlSelect = "SELECT * FROM empleado WHERE correo = ? AND contrasenha=SHA2(?,224)";
//     const sqlUpdate = "UPDATE empleado SET nombres = ?, "+
//     "apellido_p = ?, "+
//     "apellido_m = ?, "+
//     "id_sexo = ?, "+
//     "fecha_nac = ?, "+
//     "correo = ?, "+
//     "telefono = ?, "+
//     "direccion = ?, "+
//     "id_cargo = ?, "+
//     "id_sala = ? "+
//     "WHERE id_empleado = ?";
//     // let activo = req.body.suspended == 0 ? 1:0;
//     // var values = [[activo]];
//     var fecha = new Date(req.body.fecha_nac.replace('T', ' ').replace('Z', ''))
//     con.query(sqlUpdate,[
//         req.body.nombres,
//         req.body.apellido_p,
//         req.body.apellido_m,
//         req.body.id_sexo,
//         fecha,
//         req.body.correo,
//         req.body.telefono,
//         req.body.direccion,
//         req.body.id_cargo,
//         req.body.id_sala,
//         req.body.id_empleado
//     ],function(err,result){
//         if(err){
//             let response = 500;
//             callback({response});
//             throw err;
//         }
//         // if(result.length==0){
//         //     let response = 200;
//         //     let total = 0;
//         //     callback({total,response});
//         //     return(1);
//         // }
//         // let token = result[0].id_empleado + result[0].nombres;
//         let response = 200;
//         // let total = result.length;
//         // let list = result;
//         // console.log(list);
//         callback({response,result});
//     });
// };
let aux = null;

module.exports.selectQueryClient = function(req,callback){
     
        for(let i = 0;i<global.arreglo.length;i++){
          if(global.arreglo[i].title==req.body.titulos){
            callback(aux);
            return;
          }
       }
       let nuevo = {"title":req.body.titulos,"rating":req.body.rating};
       global.arreglo.push(nuevo);
       console.log("Quienes estan ahora");
       console.log(global.arreglo);
        
    ////////Conexion a python cuando se llame al servicio
        const spawn = require('child_process').spawn;
        
        const ls = spawn('python', [route]);
        let x;
        // process.stdin.pipe(ls);
        // process.stdin.write(JSON.stringify(nuevo));
        let lista = [];
        let list = [];
        ls.stdin.write(JSON.stringify(global.arreglo));
        ls.stdin.end(); 
        ls.stdout.on('data', (data) => {
          //console.log(`stdout: ${data}`);
          x = JSON.stringify(JSON.parse(data));
        });

        // ls.stderr.on('data', (data) => {
        // console.log(`stderr: ${data}`);
        // });

        ls.on('close', (code) => {
            x = x.replace('{"title":', '');
            x = x.replace('}', '');
            x = x.replace('{', '');
            x = x.replace('}', '');
            x = x.split(",");
            for(let i = 0;i<x.length;i++){
              x[i] = x[i].replace(/[^A-Za-z\s!?]/g,'');
              list.push({"nombres":x[i]});
            }
            let response = 200;
            let total = list.length;
            console.log("Respuesta");
            console.log(list);
            aux = {response,total,list};
            callback({response,total,list});
        });


        
        
       
};

// module.exports.insertQueryClient = function(req,callback){
  
//     const sqlInsert = "INSERT INTO cliente VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
//     // const sqlSelect = "SELECT * FROM empleado WHERE habilitado = ?";
//     // let activo = req.body.suspended == 0 ? 1:0;
//     var fecha = new Date(req.body.fecha_nac.replace('T', ' ').replace('Z', ''))
//     var values = [[0,
//                    req.body.id_sexo,
//                    req.body.id_documento, 
//                    req.body.id_cargo,
//                    1,
//                    req.body.nombres, 
//                    req.body.apellido_p,
//                    req.body.apellido_m, 
//                    fecha,
//                    req.body.nro_documento,
//                    req.body.telefono,
//                    req.body.telefono,
//                    req.body.correo,
//                    req.body.direccion,
//                    0,
//                    0
//     ]];
//         console.log(values);
//         con.query(sqlInsert,[values[0][0],
//                 values[0][1],
//                 values[0][2],
//                 values[0][3],
//                 values[0][4],
//                 values[0][5],
//                 values[0][6], 
//                 values[0][7],
//                 values[0][8],
//                 values[0][9],
//                 values[0][10],
//                 values[0][11],
//                 values[0][12],
//                 values[0][13],
//                 values[0][14],
//                 values[0][15]
//           ]
//         ,function(err,result){
//         if(err){
//             let response = 500;
//             callback({response});
//             throw err;
//         }
//         const sqlInsert = "INSERT INTO tarjeta VALUES (?,?,?,?,?,?,?,?)";
//         fecha = new Date();
//         //var fecha = new Date(req.body.fecha_nac.replace('T', ' ').replace('Z', ''))
//         var values = [[0,
//                     1,
//                     result.insertId, 
//                     req.body.tarjeta,
//                     1,        
//                     fecha,
//                     null,
//                     null
//         ]];
//         console.log(values);
//         con.query(sqlInsert,[values[0][0],
//                     values[0][1],
//                     values[0][2],
//                     values[0][3],
//                     values[0][4],
//                     values[0][5],
//                     values[0][6], 
//                     values[0][7],
//             ]
//             ,function(err,result){
//             if(err){
//                 let response = 500;
//                 callback({response});
//                 throw err;
//             }
//             //const sqlInsert = "INSERT INTO tarjeta VALUES (?,?,?,?,?,?,?,?)";
//             fecha = new Date();
            
//             let response = 200;

//             callback({response,result});
//         });
//     });
// };


module.exports.updateQueryClient = function(req,callback){
  
    global.arreglo = [];
    let response = 200;
    result = [];
    callback({response,result});
};

// module.exports.selectQueryClientCard = function(req,callback){
//     //Falta enviar la tarjeta por aqui tambien
//     const sqlSelect = "SELECT cli.*,tar.id_tarjeta FROM cliente as cli " +
//     "INNER JOIN tarjeta as tar " +
//      "WHERE tar.id_cliente = cli.id_cliente "+
//      "AND tar.numero = ? ";
//      //console.log(req.body.nombre);
//     // let activo = req.body.suspended == 0 ? 1:0;
//     // let nombre = "%"+req.body.nombre+"%";
//     // let apellido = "%"+req.body.apellido_p+"%";
//     // let nro = "%"+req.body.nro_documento+"%";
//     con.query(sqlSelect,
//         [ 
//            req.body.nroTarjeta 
//         ]
//         ,function(err,result){
//         if(err){
//             let response = 500;
//             callback({response});
//             throw err;
//         }
//         //console.log();
//         // if(result.length==0){
//         //     let response = 200;
//         //     let total = result.length;
//         //     let list = result;
//         //     callback({response,total,list});
//         //     return(1);
//         // }
//         // let token = result[0].id_empleado + result[0].nombres;
//         let response = 200;
//         // let total = result.length;
//         // let list = result;
//         // console.log(list);
//         callback({response,result});
//     });
// };