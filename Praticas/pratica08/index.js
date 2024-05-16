const contatoControlador = require('./controlador')
const readline = require('readline-sync')

function menu() {
    console.log("AGENDA");
    console.log("1 - Adicionar contato");
    console.log("2 - Buscar contato");
    console.log("3 - Atualizar contato");
    console.log("4 - Remover contato");
    console.log("5 - Sair");
}
async function escolherOpcao(opcao) {
    switch (opcao) {
        case "1": {
            const nome = readline.question("Informe o seu nome: ");
            const email = readline.question("Informe o seu e-mail: ");
            const telefone = readline.question("Informe o seu telefone: ");
            contatoControlador.adicionarContato(nome, email, telefone);
            break;
        }
        case "2": {
            const nome = readline.question("Informe o nome do contato: ");
            const buscarContatos = contatoControlador.buscarContato(nome);
            if (buscarContatos) {
                console.log(buscarContatos.nome, "-", buscarContatos.telefone, "-", buscarContatos.email)
            } else {
                console.log("Contato não encontrado");
            }

            break;
        }
        case "3": {
            const nome = readline.question("Informe o nome do contato: ");
            const email = readline.question("Informe o novo e-mail: ");
            const telefone = readline.question("Informe o novo telefone: ");
            contatoControlador.atualizarContato(nome, email, telefone);
            break;
        }
        case "4": {
            const nome = readline.question("Informe o nome do contato: ");
            contatoControlador.removerContato(nome);
            break;
        }
        case "5":
            process.exit(0);
    }
}
async function main() {
    while (true) {
        menu();
        const opcao = readline.question("Entre com uma opcao: ");
        await escolherOpcao(opcao);
    }
}
main();