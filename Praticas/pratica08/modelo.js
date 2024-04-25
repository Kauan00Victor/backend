const conectarDb = require('./database')

const db = async function () {
    return conectarDb()
}

const collection = function () {
    return db.collection('contatos')
}

class Contato {
    constructor(nome, telefone, email) {
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
        this.id = null
    }
}

async function inserir() {
    const result = await collection().insertOne({
        nome: this.nome,
        telefone: this.telefone,
        email: this.email
    })
    this.id = result.ops[0]._id;
}

async function alterar() {
    await collection().updateOne({
        _id: this.id
    },
        {
            $set: {
                nome: this.nome,
                telefone: this.telefone,
                email: this.email
            }
        })
}
async function deletar() {
    await collection().deleteOne({
        _id: this.id
    })
}


async function buscar() {
    const result = await collection().findOne({
        nome: this.nome,
    })
    if (result) {
        this.id = result._id;
        this.nome = result.nome;
        this.telefone = result.telefone;
        this.email = result.email;
    }

    return result;
}

module.exports = Contato

