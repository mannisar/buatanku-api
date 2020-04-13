const express = require('express')
const app = express()
const cors = require('cors')
const time = require('morgan')
const body = require('body-parser')

const callRoute = require('./src/routes')
const { port } = require('./src/configs/mysql')

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})
app.use(
  body.urlencoded({
    extended: true
  })
)
app.use(body.json())
app.use(time('dev'))
app.use('/', cors(), callRoute)
app.listen(port, () => console.log(`PORT: ${port}`))
