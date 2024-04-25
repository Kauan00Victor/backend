const contato = require('./modelo')

function adicionarContato(nome, email, telefone) {
    const contato = Contato();
    return contato.inserir();
};

function buscarContato(nome) {
    const contato = Contato(nome);
    return contato.buscar();
};

function atualizarContato(nome, email, telefone) {
    const contato = buscarContato()
    if (buscarContato) {
        buscarContato.telefone = telefone;
        buscarContato.email = email;
    }
    contato.atualizar()
}

function removerContato(nome) {
    const contato = buscarContato()
    if (buscarContato) {
        contato.remover()
    }
}

module.exports = {atualizarContato, buscarContato, adicionarContato, removerContato}
