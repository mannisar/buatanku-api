const express = require('express')
const Route = express.Router()

// check token.
// const { middleware } = require('../auth');

const { uploadSingleImage } = require('../helpers/image')

const {
  createUser,
  readUser,
  updateUser,
  deleteUser,
  detailUser,
  login,
  changePassword
} = require('../controllers/user')

Route
  .post('/register', uploadSingleImage, createUser)
  .get('/', readUser)
  .patch('/:id', uploadSingleImage, updateUser)
  .delete('/:id', deleteUser)
  .get('/:id', detailUser)
  .post('/login', login)
  .patch('/password/:id', changePassword)

module.exports = Route
