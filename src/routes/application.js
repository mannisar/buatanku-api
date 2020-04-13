const express = require('express')
const Route = express.Router()

// check token.
// const { middleware } = require('../auth')

const { uploadMultiImage } = require('../helpers/image')

const {
  createApplication,
  readApplication,
  updateApplication,
  deleteApplication,
  detailApplication
} = require('../controllers/application')

Route
  .post('/', uploadMultiImage, createApplication)
  .get('/', readApplication)
  .patch('/:id', uploadMultiImage, updateApplication)
  .delete('/:id', deleteApplication)
  .get('/:id', detailApplication)

module.exports = Route
