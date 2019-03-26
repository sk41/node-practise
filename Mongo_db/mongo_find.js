var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

function verify(){
MongoClient.connect(url, function(err, db) {
  var list=[];
  var l=["dgdh","gdui"];
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("todocollection").find({}, { projection: {_id:0, name: 1 } }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    var i=0;
    result.forEach(function(element ,index){

      list[i]=result[index].name;
      i=i+1;
    });
    console.log(list);
    console.log(l);

    db.close();
  });
});

}


verify();