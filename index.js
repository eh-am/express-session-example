var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser());
app.get('/', function (req, res){
  res.send("<h1> Hello World</h1>");
});
app.post('/', function(req, res){
  //TODO
  //test if the login is valid
  console.log(req.body.userName);
});

app.listen(8080);
console.log("listening on 8080");


