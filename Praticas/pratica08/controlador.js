const modelo = require("./modelo");

function consultarContato(nome) {
  const contato = new modelo.Contato(nome);
  return modelo.consultar(contato);
}

function incluirContato(nome, email, telefone) {
  const contato = new modelo.Contato(nome, email, telefone);
  return modelo.inserir(contato);
}

function atualizarContato(nome, email, telefone) {
  const contato = consultarContato(nome);
  contato.email = email;
  contato.telefone = telefone;
  return contato;
}

function removerContato(nome) {
  const contato = consultarContato(nome);
  return contato;
}

module.exports = {
  consultarContato,
  incluirContato,
  atualizarContato,
  removerContato,
};
