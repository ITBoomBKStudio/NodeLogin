const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://BKStudio:BKStudio21032018@cluster0-avmr6.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
