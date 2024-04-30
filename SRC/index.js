const express = require('express')
var bodyParser = require('body-parser')
const router = require('./router')

const app = express()

var jsonParser = bodyParser.json()

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(jsonParser)
app.use(urlencodedParser)

app.use(router)

app.listen(3001)
