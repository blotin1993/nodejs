const express = require('express');
const app = express();
const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'))
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
app.listen(3000, () => {
  console.log(`Server started - Port ${port}`)
})