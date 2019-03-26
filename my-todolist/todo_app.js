var express = require('express');
var session = require('cookie-session'); // Loads the piece of middleware for sessions
var bodyParser = require('body-parser'); // Loads the piece of middleware for managing the settings
var urlencodedParser = bodyParser.urlencoded({
    extended: false
});

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var app = express();
console.log("working");

var list = [];

var todolist = [];


function verify() {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        dbo.collection("todocollection").find({}, {
            projection: {
                _id: 0,
                name: 1
            }
        }).toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            var i = 0;
            result.forEach(function (element, index) {

                list[i] = result[index].name;
                i = i + 1;
            });

            db.close();
        });
    });
    return list;
}




function insert(value) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        var myobj = {
            name: value
        };
        dbo.collection("todocollection").insertOne(myobj, function (err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
        });
    });
}



function delete_one(del_value) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        var myquery = {
            name: del_value
        };
        dbo.collection("todocollection").deleteOne(myquery, function (err, obj) {
            if (err) throw err;
            console.log("1 document deleted");
            db.close();
        });
    });
}

function drop_list(){
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        dbo.collection("todocollection").drop(function(err, delOK) {
          if (err) throw err;
          if (delOK) console.log("Collection deleted");
          db.close();
        
        });
      });

}

/* Using the sessions */
app.use(session({
        secret: 'todotopsecret'
    }))


    /* If there is no to do list in the session, 
    we create an empty one in the form of an array before continuing */
    .use(function (req, res, next) {
        next();
    })

    /* The to do list and the form are displayed */
    .get('/todo', function (req, res) {
        tool=[];
        todol= verify();
        todolist=todol;
        console.log(todolist);
        res.render('todo.ejs', {
            todolist
        });
    })

    /* Adding an item to the to do list */
    .post('/todo/add/', urlencodedParser, function (req, res) {
        if (req.body.newtodo != '') {
            insert(req.body.newtodo);
            todolist.push(req.body.newtodo);
        }
        res.redirect('/todo');
    })


    /*delete full list*/

    .post('/todo/deleteall/',urlencodedParser,function(req,res){
        drop_list();
        todolist.forEach(function(element ,index){
            todolist.splice(index, 1);
        })

    
        res.redirect('/todo');
    })

    /* Deletes an item from the to do list */
    .get('/todo/delete/:id', function (req, res) {
        if (req.params.id != '') {
            var temp = req.params.id;

            delete_one(todolist[temp]);
            todolist.splice(req.params.id, 1);
        }
        res.redirect('/todo');
    })

    /* Redirects to the to do list if the page requested is not found */
    .use(function (req, res, next) {
        res.redirect('/todo');
    })

    .listen(7777);