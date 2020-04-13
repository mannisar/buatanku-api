const model = require('../models/user')
const response = require('../helpers/response')
const auth = require('../helpers/auth')
const JWT = require('jsonwebtoken')
const { JWT_KEY, url } = require('../configs/mysql')

module.exports = {
  createUser: async (req, res) => {
    try {
      const check = await model.checkEmail(req.body.email)
      const dataUser = check[0]
      const salt = auth.generateSalt(18)
      const hash = auth.setPassword(req.body.password, salt)

      if (dataUser === undefined) {
        if (!req.file || Object.keys(req.file).length === 0) {
          const first_name = req.body.first_name
          const last_name = req.body.last_name
          const email = req.body.email
          const no_handphone = req.body.no_handphone
          const company = req.body.company
          const address = req.body.address
          const id_role = req.body.id_role || 4
          const data = {
            first_name,
            last_name,
            email,
            password: hash.password,
            salt: hash.salt,
            no_handphone,
            company,
            address,
            id_role,
            date_added: new Date(),
            date_updated: new Date()
          }

          const result = await model.createUser(data)
          return response.success(res, 200, result)
        }

        const first_name = req.body.first_name
        const last_name = req.body.last_name
        const email = req.body.email
        const no_handphone = req.body.no_handphone
        const company = req.body.company
        const address = req.body.address
        const id_role = req.body.id_role || 4
        const avatar = `${url}upload/${req.file.filename}`
        const data = {
          first_name,
          last_name,
          email,
          password: hash.password,
          salt: hash.salt,
          no_handphone,
          company,
          address,
          id_role,
          avatar,
          date_added: new Date(),
          date_updated: new Date()
        }

        const result = await model.createUser(data)
        response.success(res, 200, result)
      } else {
        return response.error(res, 404, 'Your Email is Already Registerd!')
      }
    } catch (err) {
      response.error(res, 404, 'Failed!')
    }
  },
  readUser: async (req, res) => {
    try {
      const result = await model.readUser()
      response.success(res, 200, result)
    } catch (err) {
      response.error(res, 404, 'Failed!')
    }
  },
  updateUser: async (req, res) => {
    if (!req.file || Object.keys(req.file).length === 0) {
      const id = req.params.id
      const first_name = req.body.first_name
      const last_name = req.body.last_name
      const email = req.body.email
      const no_handphone = req.body.no_handphone
      const company = req.body.company
      const address = req.body.address
      const id_role = req.body.id_role || 4
      const data = {
        first_name,
        last_name,
        email,
        no_handphone,
        company,
        address,
        id_role,
        date_updated: new Date()
      }

      const result = await model.updateUser(data, id)
      return response.success(res, 200, result)
    }

    const id = req.params.id
    const first_name = req.body.first_name
    const last_name = req.body.last_name
    const email = req.body.email
    const no_handphone = req.body.no_handphone
    const company = req.body.company
    const address = req.body.address
    const id_role = req.body.id_role || 4
    const avatar = `${url}upload/${req.file.filename}`
    const data = {
      first_name,
      last_name,
      email,
      no_handphone,
      company,
      address,
      id_role,
      avatar,
      date_updated: new Date()
    }

    const result = await model.updateUser(data, id)
    response.success(res, 200, result)
    try {
    } catch (err) {
      response.error(res, 404, 'Failed!')
    }
  },
  deleteUser: async (req, res) => {
    try {
      const id = req.params.id

      const result = await model.deleteUser(id)
      response.success(res, 200, result)
    } catch (err) {
      response.error(res, 404, 'Failed!')
    }
  },
  detailUser: async (req, res) => {
    try {
      const id = req.params.id

      const result = await model.detailUser(id)
      response.success(res, 200, result)
    } catch (err) {
      response.error(res, 404, 'Failed!')
    }
  },
  login: async (req, res) => {
    try {
      const check = await model.checkEmail(req.body.email)
      const dataUser = check[0]

      if (dataUser === undefined) {
        return response.error(res, 404, 'Your Email is Not Registerd!')
      } else {
        const email = req.body.email
        const password = req.body.password
        const hash = auth.setPassword(password, dataUser.salt)

        if (dataUser.email !== email) {
          return response.error(res, 404, 'Email is Incorrect!')
        }
        if (dataUser.password !== hash.password) {
          return response.error(res, 404, 'Password is Incorrect!')
        }

        const token = JWT.sign({
          id: dataUser.id,
          email: dataUser.email
        }, JWT_KEY, {
          expiresIn: '24h'
        })

        delete dataUser.salt
        delete dataUser.password

        dataUser.token = token

        response.success(res, 200, dataUser)
      }
    } catch (err) {
      response.error(res, 404, 'Failed!')
    }
  },
  changePassword: async (req, res) => {
    try {
      const id = req.params.id
      const salt = auth.generateSalt(18)
      const hash = auth.setPassword(req.body.password, salt)
      const data = {
        password: hash.password,
        salt: hash.salt,
        date_updated: new Date()
      }

      await model.changePassword(data, id)
      response.success(res, 200, 'Change Password Successful!')
    } catch (err) {
      response.error(res, 404, 'Failed!')
    }
  }
}
