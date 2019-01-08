const MongoClient = require('mongodb').MongoClient;

 
// Connection URL
//const url = 'mongodb://localhost:27017';
//const url = 'mongodb://dbuser:admin123@ds029787.mlab.com:29787/data_ecommerce'; 
const url = 'mongodb://test:bbva1234@ds047478.mlab.com:47478/bbvatest'
// Database Name
const dbName = 'bbvatest';
 
// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  if(err){ console.log(err)};

  //console.log("Connected successfully to server",db);
   var dbo = db.db(dbName);
   var cursor = dbo.collection("clients").find();
   cursor.each(function(err,item){
    console.log('item', item);
   });
   /*
   dbo.collection("clients").find({}, function(err, result){
    if(err) throw err;
    console.log(result);
    db.close();
   });
   */
  //const db = client.db(dbName);
 
  //client.close();
});
