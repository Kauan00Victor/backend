const MongoClient = require('mongodb')
const url = "mongodb+srv://Kauan099:<password>@cluster0.xav1axr.mongodb.net/"


var client = MongoClient(url)

async function conectarDb (){
    client.connect;
    return cliente.db('agenda');
}

module.exports = {conectarDb};