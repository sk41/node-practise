var http = require('http');
var fs = require('fs');
// http.createServer(function (req, res) {
//   fs.readFile('file.txt', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     res.end();
//   });
// }).listen(8080);




// console.log(__dirname);
// console.log(__filename);
console.log('Before');
fs.readFile('file.txt', 'utf8', function(err, contents) {
    console.log(contents);
});
 
console.log('after calling readFile');