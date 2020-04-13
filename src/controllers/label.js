const model = require('../models/label')
const response = require('../helpers/response')

module.exports = {
  createLabel: async (req, res) => {
    try {
      const name = req.body.name
      const data = { name }

      const result = await model.createLabel(data)
      response.success(res, 200, result)
    } catch (err) {
      response.error(res, 404, 'Failed!')
    }
  },
  readLabel: async (req, res) => {
    try {
      const result = await model.readLabel()
      response.success(res, 200, result)
    } catch (err) {
      response.error(res, 404, 'Failed!')
    }
  },
  updateLabel: async (req, res) => {
    try {
      const id = req.params.id
      const name = req.body.name
      const data = { name }

      const result = await model.updateLabel(data, id)
      response.success(res, 200, result)
    } catch (err) {
      response.error(res, 404, 'Failed!')
    }
  },
  deleteLabel: async (req, res) => {
    try {
      const id = req.params.id

      const result = await model.deleteLabel(id)
      response.success(res, 200, result)
    } catch (err) {
      response.error(res, 404, 'Failed!')
    }
  },
  detailLabel: async (req, res) => {
    try {
      const id = req.params.id

      const result = await model.detailLabel(id)
      response.success(res, 200, result)
    } catch (err) {
      response.error(res, 404, 'Failed!')
    }
  }
}
