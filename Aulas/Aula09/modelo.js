const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
    nome: {
        type: String,
        trim: true,
        unique: true,
        uppercase: true,
        required: [true, 'Nome é obrigatório'],
        minLength: [3, 'Nome deve ter no minimo 3 caracteres']
    },
    preco: {
        type: Number,
        min: [0, "Valor minimo do preco é ZERO"],
        required: [true, "Preço é obrigatório"]
    },
    quantidade: {
        type: Number,
        default: 0
    },
})

module.exports = mongoose.model('Produto', produtoSchema);