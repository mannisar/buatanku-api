const model = require('../models/category')
const response = require('../helpers/response')

module.exports = {
  createCategory: async (req, res) => {
    try {
      const name = req.body.name
      const data = { name }

      const result = await model.createCategory(data)
      response.success(res, 200, result)
    } catch (err) {
      response.error(res, 404, 'Failed!')
    }
  },
  readCategory: async (req, res) => {
    try {
      const result = await model.readCategory()
      response.success(res, 200, result)
    } catch (err) {
      response.error(res, 404, 'Failed!')
    }
  },
  updateCategory: async (req, res) => {
    try {
      const id = req.params.id
      const name = req.body.name
      const data = { name }

      const result = await model.updateCategory(data, id)
      response.success(res, 200, result)
    } catch (err) {
      response.error(res, 404, 'Failed!')
    }
  },
  deleteCategory: async (req, res) => {
    try {
      const id = req.params.id

      const result = await model.deleteCategory(id)
      response.success(res, 200, result)
    } catch (err) {
      response.error(res, 404, 'Failed!')
    }
  },
  detailCategory: async (req, res) => {
    try {
      const id = req.params.id

      const result = await model.detailCategory(id)
      response.success(res, 200, result)
    } catch (err) {
      response.error(res, 404, 'Failed!')
    }
  }
}
