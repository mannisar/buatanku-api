const express = require('express')
const Route = express.Router()

// check token.
// const { middleware } = require('../auth')

const {
  createCategory,
  readCategory,
  updateCategory,
  deleteCategory,
  detailCategory
} = require('../controllers/category')

Route
  .post('/', createCategory)
  .get('/', readCategory)
  .patch('/:id', updateCategory)
  .delete('/:id', deleteCategory)
  .get('/:id', detailCategory)

module.exports = Route
