const express = require("express");

const router = express.Router();

const produtos = [];

router.get("/produtos", function(req,res){
    res.json(produtos);
})

router.get("/produtos/:produtoId", function(req, res){
    const encontrado = produtos.find(produto => produtoId === req.produto)
    if (!encontrado) {
        res.status(404).send({});
        return;
    }
    res.json(encontrado);
})
router.post("/produtos", function(req, res){
    res.status(201).json({});
})
router.put("/produtos/:produtoId", function(req, res){
    if ( req.params.produtoId === 100) {
        res.status(404).send({});
        return;
    }
    res.json({});
})
router.delete("/produtos/:produtoId", function(req, res){
    if ( req.params.produtoId === 100) {
        res.status(404).send({});
        return;
    }
    res.json({});
})


module.exports = router;