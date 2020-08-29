//Librerias a usar
'use strict';
const express = require('express');
const app = express();
const axios = require("axios")
var body_parser = require('body-parser').json();

//puerto y ruta
const PORT = 3004;
const HOST = 'localhost';

app.get('/', function(req, res) {
    res.send("Orquestador de Servicios")
});

app.get('/restaurante/postorder',body_parser,function(req,res){
    var order = req.body.id
    axios.post('http://localhost:3001/postorder',{'id':num})
    res.send("OK")   
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);