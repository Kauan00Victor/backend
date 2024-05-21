const Usuario = require('../models/users');

async function criar(req, res) {
    const novoUsuiario = await Usuario.create(req.body);
    res.status(201).json({ id: novoUsuiario._id.toString(), email: novoUsuiario.email });
}


async function entrar(req, res) {
    const usuario = await Usuario.findOne({email: req.body.email});
    if (usuario.senha === req.body.senha){
        res.json({token: '12345678'})
    } else{
        res.status(401).status({msg: 'acesso negado'});
    } 
}

module.exports = { criar, entrar }