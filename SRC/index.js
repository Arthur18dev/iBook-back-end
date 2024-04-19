const express = require('express')
const db = require('./db/conexao')
var bodyParser = require('body-parser')

const app = express()

var jsonParser = bodyParser.json()

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(jsonParser)

app.use(urlencodedParser)

app.get('/', function (req, res) {
  res.send({ message: 'Olá Arthur'})
})

app.get('/rapaz', function(req, res) {
  let data = req.query
  let message = ''

  if(data.search !== undefined) {
    message = ' Como vai? ' + data.search
  }
  res.json({
    message: 'Oi camarada' + message,
  })
})


// Crud Usuarios
app.get('/usuarios', function(req, res) {
  

     // READ
     db.query(
      'SELECT * FROM usuarios ',
      function (err, results) {
        if(err){
          res.json({ erro: err })
        }
        else
        res.json({ usuarios: results })
      }
      
    );

 
})


app.post('/usuarios', function (req, res, next) {
  let body = req.body;
      // CREATE
      db.query(
        `INSERT INTO usuarios (nome, email, senha) value("${body.nome}", "${body.email}", "${body.senha}")`,
        function (err, results) {
          if(err){
            res.json({ erro: err })
          }
          else
          res.json({ message: "Criada com sucesso" })
        }
        
      );
})

app.listen(3001)
