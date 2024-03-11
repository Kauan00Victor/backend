const express = require("express");

const app = express();

app.get('/', function(req,res){
    res.send("Você fez uma requisição GET");
})

app.post('/', function(req,res){
    console.log(req.body);
    res.status(201).end();
});

app.put('/', function(req, res){
    res.send("Você fez uma requisição PUT");
})

app.delete('/', function(req,res){
    res.status(204).end();
})

app.listen(3000);

module.exports = app;
