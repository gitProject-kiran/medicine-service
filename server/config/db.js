/* var MongoClient = require('mongodb').MongoClient;

//mongoose.connect('mongodb://localhost/medicinedatabase', { useNewUrlParser: true } );

// replace the uri string with your connection string.
const uri = "mongodb://admin:admin@cluster0-shard-00-00-7bx9r.mongodb.net:27017,cluster0-shard-00-01-7bx9r.mongodb.net:27017,cluster0-shard-00-02-7bx9r.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true"
var collection ;
MongoClient.connect(uri, { useNewUrlParser: true }, function(err, client) {
   if(err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }
   console.log('Connected...');
   collection = client.db("medicine").collection("pincode");
   // perform actions on the collection object
   //client.close();
}); */

const mongoose = require("mongoose");

const dbURI =
  "mongodb://admin:admin@cluster0-shard-00-00-7bx9r.mongodb.net:27017,cluster0-shard-00-01-7bx9r.mongodb.net:27017,cluster0-shard-00-02-7bx9r.mongodb.net:27017/medicine?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";


mongoose.connect(dbURI,  { useNewUrlParser: true }).then(
  () => {
    console.log("Database connection established!");
  },
  err => {
    console.log("Error connecting Database instance due to: ", err);
  }
);

// require any models

require("../models/pincodes");