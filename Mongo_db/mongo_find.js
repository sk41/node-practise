var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  var list=[];
  var l=["dgdh","gdui"];
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("todocollection").find({}, { projection: {_id:0, name: 1 } }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    result.forEach(function(element ,index){

      list=result[index].name;
      
    });
    console.log(list);
    console.log(l);

    db.close();
  });
});


