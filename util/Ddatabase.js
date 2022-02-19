const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let db;

const mongoConnect = (cb) => {
  MongoClient.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.02xhr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  )
    .then((client) => {
      console.log("DB Connected!");
      db = client.db();
      cb();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (db) {
    return db;
  }
  throw "No database";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
