var express = require('express');

var fs = require('fs');

var app = express.createServer(express.logger());

var buffer = fs.readFileSync('index.html','utf-8');

app.get('/', function(request, response) {
//
// commented out original response.send Hello World line here
//
//  response.send('Hello World2!');
  response.send(buffer.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
