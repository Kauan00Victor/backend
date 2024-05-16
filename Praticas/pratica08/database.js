const {MongoClient} = require('mongodb')
const url = "mongodb+srv://Kauan099:28087800@cluster0.xav1axr.mongodb.net/"


var client = new MongoClient(url)

async function conectarDb (){
    if (db){
        return db
    }
    const client = new MongoClient(url)
    await client.connect;
    db = client.db('agenda')
    return client.db('agenda');
}

module.exports = conectarDb;