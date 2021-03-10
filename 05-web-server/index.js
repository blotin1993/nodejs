const express = require('express');
const app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
})

app.get('/usuarios', function(req, res) {
    res.send('Usuario: Fernando');
  })
app.post('/', function(req, res) {
    res.send('Post del path /');
  })

//https puerto x default es 443 , y http el 80(?)
app.listen(3000)