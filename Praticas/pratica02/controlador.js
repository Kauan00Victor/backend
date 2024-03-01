const readline = require('readline-sync');

const Contato = require('./modelo');

const contatos = [];

function adicionarContato(nome, email, telefone){
    const novoContato = new Contato(nome, email, telefone);
    contatos.push(novoContato);
};

function listarContatos(){
    return contatos;
};

function buscarContato(nome){
    const buscarContatos = contatos.find(contato => contato.nome === nome);
    return buscarContatos;
}

function atualizarContato(nome, email, telefone){
    const buscarContatos = buscarContato(nome);
    if (buscarContatos){
        buscarContatos.telefone = telefone;
        buscarContatos.email = email;
    } else {
        console.log("Contato não encontrado")
    }
}

function removerContato(nome){
    const posicao = contatos.findIndex(contato => contato.nome === nome);
    if (posicao >= 0){
        contatos.splice(posicao, 1);
    } else {
        console.log("Contato não encontrado");
    }
}

module.exports = {listarContatos,atualizarContato, buscarContato, adicionarContato, removerContato}


