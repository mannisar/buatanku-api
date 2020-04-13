const express = require('express')
const Route = express.Router()

// check token.
// const { middleware } = require('../auth')

const {
  createLabel,
  readLabel,
  updateLabel,
  deleteLabel,
  detailLabel
} = require('../controllers/label')

Route
  .post('/', createLabel)
  .get('/', readLabel)
  .patch('/:id', updateLabel)
  .delete('/:id', deleteLabel)
  .get('/:id', detailLabel)

module.exports = Route
