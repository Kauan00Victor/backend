const express = require('express');

const controllerProdutos = require('../controllers/contoller_produtos')

const router = express.Router();

router.get('/', controllerProdutos.listarTodos);

router.get('/:produtoId', controllerProdutos.buscarPeloId);

router.post('/', controllerProdutos.criar);

router.put('/:produtoId', controllerProdutos.atualizar);

router.delete('/:produtoId', controllerProdutos.deletar);

module.exports = router;



