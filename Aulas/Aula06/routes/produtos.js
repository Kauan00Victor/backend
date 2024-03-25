const express = require("express");

const produtosController = require("../controllers/controller_produto")

const router = express();

router.get("/", produtosController.listarTodos);

router.get("/:produtoId", produtosController.buscarPeloId);

router.post("/", produtosController.criarProduto);

router.put("/:produtoId", produtosController.atualizarProdutos);

router.delete("/:produtoId", produtosController.deletarProdutos);

module.exports = router;