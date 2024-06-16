const express = require("express");
const app = express();
const cors = require('cors');
var bodyParser = require('body-parser');

//Con fe no explota con variables globales, este arreglo es donde se guardaran las busquedas
global.arreglo = [];

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

require('./routers/routes')(app);

app.listen(4000,()=>{
   console.log("running on port 4000");
});