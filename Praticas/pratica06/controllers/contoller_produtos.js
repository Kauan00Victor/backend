const produtos = [];

function listarTodos(req, res){
    res.json(produtos);
}

function buscarPeloId(req, res, next){
    const encontrado = produtos.find(item => item.id === req.params.id)
    
    if (encontrado){
        req.produtos = encontrado;
        next();
    } else {
        res.status(404).json({ msg: 'Produto não encontrado'})
    }
}

function criar(req,res){
    if (!req.body.nome || !req.body.preco){
    const novoProduto  = {
        id: produtos.length + 1,
        nome: req.body.nome,
        preco: req.body.preco
    }
    produtos.push(novoProduto)

    return res.status(201).json(novoProduto)
    } else {
        res.status(422).json({msg: 'Nome e/ou preço do produto não informados'})
    }
}

function atualizar(req, res) {
    const atualizado = produtos.find(item => item.id === req.params.id)
    if (atualizado) {

    atualizado.nome = req.body.nome;
    atualizado.preco = req.body.preco;

    produtos,push(atualizado);
    
    res.json(produtos);
  } else {
    res.status(404).json({msg: 'Produto não encontrado'})
  }
}

function deletar(req, res){
    const posicao = produtos.findIndex(item => item.id === req.params.id)
    if (posicao >= 0){
        produtos.splice(posicao, 1 )
         return res.status(204);
    } else {
        return res.status(404).json({msg: 'Produto não encontrado'})
    }
}


module.exports = { listarTodos, buscarPeloId, criar, atualizar, deletar}