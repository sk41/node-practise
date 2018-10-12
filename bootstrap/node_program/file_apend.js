var fs = require('fs');

fs.appendFile('file.txt', 'this is appended content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});


