var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');

var app = express();

app.use(bodyParser());
app.use(session({secret: '123'}));

app.get('/', function (req, res){
  res.send("<h1> Hello World " + session.userName + "</h1>" +
           "<form action='/' method='POST'>" +
            "<input type='text' name='userName'\>" +
            "<button>Submit</button>" +
           "</form>");
});
app.post('/', function(req, res){
  //TODO
  //test if the login is valid
  
  session.userName = req.body.userName;
  res.redirect('/');
});

app.listen(8080);
console.log("listening on 8080");


