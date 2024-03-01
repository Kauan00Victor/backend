const readline = require("readline-sync");

const contatoControlador = require("./controlador");

function menu() {
  console.log("1 - Adicionar contato");
  console.log("2 - Listar contatos");
  console.log("3 - Buscar contato");
  console.log("4 - Atualizar contato");
  console.log("5 - Remover contato");
  console.log("6 - Sair");
}

function escolherOpcao(opcao) {
  switch (opcao) {
    case "1": {
      const nome = readline.question("Informe o seu nome: ");
      const email = readline.question("Informe o seu e-mail: ");
      const telefone = readline.question("Informe o seu telefone: ");
      contatoControlador.adicionarContato(nome,email,telefone);
      break;
    }
    case "2": {
      const contatos = contatoControlador.listarContatos();
      contatos.forEach(contato => console.log(contato.nome, "-", contato.telefone, "-", contato.email ));
      break;
    }
    case "3": {
      const nome = readline.question("Informe o nome do contato: ");
      const buscarContatos = contatoControlador.buscarContato(nome);
      if (buscarContatos){
        console.log(buscarContatos.nome, "-", buscarContatos.telefone, "-", buscarContatos.email)
    } else {
        console.log("Contato não encontrado");
    }
      
      break;
    }
    case "4": {
      const nome = readline.question("Informe o nome do contato: ");
      const email = readline.question("Informe o novo e-mail: ");
      const telefone = readline.question("Informe o novo telefone: ");
      contatoControlador.atualizarContato(nome, email, telefone);
      break;
    }
    case "5": {
      const nome = readline.question("Informe o nome do contato: ");
      contatoControlador.removerContato(nome);
      break;
    }
    case "6":
      process.exit(0);
  }
}
function main() {
  while (true) {
    menu();
    const opcao = readline.question("Entre com uma opção: ");
    escolherOpcao(opcao);
  }
}
main();
