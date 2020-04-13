const express = require('express')
const Route = express.Router()

// check token.
// const { middleware } = require("../auth");

const {
  createRole,
  readRole,
  updateRole,
  deleteRole,
  detailRole
} = require('../controllers/role')

Route
  .post('/', createRole)
  .get('/', readRole)
  .patch('/:id', updateRole)
  .delete('/:id', deleteRole)
  .get('/:id', detailRole)

module.exports = Route
