const model = require('../models/role')
const response = require('../helpers/response')

module.exports = {
  createRole: async (req, res) => {
    try {
      const name = req.body.name
      const data = { name }

      const result = await model.createRole(data)
      response.success(res, 200, result)
    } catch (err) {
      response.error(res, 404, 'Failed!')
    }
  },
  readRole: async (req, res) => {
    try {
      const result = await model.readRole()
      response.success(res, 200, result)
    } catch (err) {
      response.error(res, 404, 'Failed!')
    }
  },
  updateRole: async (req, res) => {
    try {
      const id = req.params.id
      const name = req.body.name
      const data = { name }

      const result = await model.updateRole(data, id)
      response.success(res, 200, result)
    } catch (err) {
      response.error(res, 404, 'Failed!')
    }
  },
  deleteRole: async (req, res) => {
    try {
      const id = req.params.id

      const result = await model.deleteRole(id)
      response.success(res, 200, result)
    } catch (err) {
      response.error(res, 404, 'Failed!')
    }
  },
  detailRole: async (req, res) => {
    try {
      const id = req.params.id

      const result = await model.detailRole(id)
      response.success(res, 200, result)
    } catch (err) {
      response.error(res, 404, 'Failed!')
    }
  }
}
