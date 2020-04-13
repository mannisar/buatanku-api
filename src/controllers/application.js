const model = require('../models/application')
const response = require('../helpers/response')
const { url } = require('../configs/mysql')

module.exports = {
  createApplication: async (req, res) => {
    try {
      const check = await model.checkApplication(req.body.name)
      const dataApp = check[0]

      if (dataApp === undefined) {
        if (!req.files || Object.keys(req.files).length === 0) {
          const name = req.body.name
          const card_desc = req.body.card_desc
          const short_desc = req.body.short_desc
          const long_desc = req.body.long_desc
          const id_category = req.body.id_category
          const id_label = req.body.id_label
          const data = {
            name,
            card_desc,
            short_desc,
            long_desc,
            id_category,
            id_label,
            date_added: new Date(),
            date_updated: new Date()
          }

          const result = await model.createApplication(data)
          return response.success(res, 200, result)
        }

        const name = req.body.name
        const card_desc = req.body.card_desc
        const short_desc = req.body.short_desc
        const long_desc = req.body.long_desc
        const id_category = req.body.id_category
        const id_label = req.body.id_label
        const ArrPhoto = []
        const photo = req.files
        photo.map(p => ArrPhoto.push({ photo: `${url}upload/${p.filename}` }))
        const data = {
          name,
          card_desc,
          short_desc,
          long_desc,
          id_category,
          id_label,
          photo: JSON.stringify(ArrPhoto),
          date_added: new Date(),
          date_updated: new Date()
        }

        const result = await model.createApplication(data)
        response.success(res, 200, result)
      } else {
        return response.error(res, 404, `The Name of '${req.body.name}' Already Use!`)
      }
    } catch (err) {
      response.error(res, 404, 'Failed!')
    }
  },
  readApplication: async (req, res) => {
    try {
      const name = req.query.name || ''
      const category = req.query.category || ''
      const label = req.query.label || ''
      const sortBy = req.query.sortBy || 'id'
      const page = req.query.page || 1
      const limit = req.query.limit || 9999999
      const data = {
        name,
        category,
        label,
        sortBy,
        page,
        limit
      }

      const allData = {
        name,
        category,
        label,
        sortBy,
        page: 1,
        limit: 9999999
      }

      const result = await model.readApplication(data)
      const totalData = await model.readApplication(allData)
      const totalPage = Math.ceil(totalData.length / limit)

      response.success(res, 200, result, totalPage)
    } catch (err) {
      response.error(res, 404, 'Failed!')
    }
  },
  updateApplication: async (req, res) => {
    try {
      if (!req.files || Object.keys(req.files).length === 0) {
        const id = req.params.id
        const name = req.body.name
        const card_desc = req.body.card_desc
        const short_desc = req.body.short_desc
        const long_desc = req.body.long_desc
        const id_category = req.body.id_category
        const id_label = req.body.id_label
        const data = {
          name,
          card_desc,
          short_desc,
          long_desc,
          id_category,
          id_label,
          date_updated: new Date()
        }

        const result = await model.updateApplication(data, id)
        return response.success(res, 200, result)
      }

      const id = req.params.id
      const name = req.body.name
      const card_desc = req.body.card_desc
      const short_desc = req.body.short_desc
      const long_desc = req.body.long_desc
      const id_category = req.body.id_category
      const id_label = req.body.id_label
      const ArrPhoto = []
      const photo = req.files
      photo.map(p => ArrPhoto.push({ photo: `${url}upload/${p.filename}` }))
      const data = {
        name,
        card_desc,
        short_desc,
        long_desc,
        id_category,
        id_label,
        photo: JSON.stringify(ArrPhoto),
        date_updated: new Date()
      }

      const result = await model.updateApplication(data, id)
      response.success(res, 200, result)
    } catch (err) {
      response.error(res, 404, 'Failed!')
    }
  },
  deleteApplication: async (req, res) => {
    try {
      const id = req.params.id

      const result = await model.deleteApplication(id)
      response.success(res, 200, result)
    } catch (err) {
      response.error(res, 404, 'Failed!')
    }
  },
  detailApplication: async (req, res) => {
    try {
      const id = req.params.id

      const result = await model.detailApplication(id)
      response.success(res, 200, result)
    } catch (err) {
      response.error(res, 404, 'Failed!')
    }
  }
}
