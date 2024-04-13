const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send({ message: 'Olá Arthur'})
})

app.get('/Delciane', function(req, res) {
  let data = req.query
  let message = ''

  if(data.search !== undefined) {
    message = ' Como vai? ' + data.search
  }
  res.json({
    message: 'Oi Delciane' + message,
  })
})

app.listen(3001)