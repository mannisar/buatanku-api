const express = require('express')
const Route = express.Router()

const userRouter = require('./user')
const roleRouter = require('./role')
const applicationRouter = require('./application')
const categoryRouter = require('./category')
const labelRouter = require('./label')

Route
  .use('/upload', express.static('./upload'))
  .use('/user', userRouter)
  .use('/role', roleRouter)
  .use('/application', applicationRouter)
  .use('/category', categoryRouter)
  .use('/label', labelRouter)

module.exports = Route
