const conn = require('../configs/db')

module.exports = {
  createUser: (data) => {
    return new Promise((resolve, reject) => {
      conn.query('ALTER TABLE user AUTO_INCREMENT = 0')
      conn.query('INSERT INTO user SET ?', data)
      conn.query('SELECT user.*, role.name AS role FROM user INNER JOIN role ON role.id = user.id_role', (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  },
  readUser: () => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT user.*, role.name AS role FROM user INNER JOIN role ON role.id = user.id_role', (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  },
  updateUser: (data, id) => {
    return new Promise((resolve, reject) => {
      conn.query('UPDATE user SET ? WHERE id = ?', [data, id])
      conn.query('SELECT user.*, role.name AS role FROM user INNER JOIN role ON role.id = user.id_role', (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  },
  deleteUser: (id) => {
    return new Promise((resolve, reject) => {
      conn.query('DELETE FROM user WHERE id = ?', id)
      conn.query('SELECT user.*, role.name AS role FROM user INNER JOIN role ON role.id = user.id_role', (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  },
  detailUser: (id) => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT user.*, role.name AS role FROM user INNER JOIN role ON role.id = user.id_role WHERE user.id = ?', id, (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  },
  checkId: (id) => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT user.*, role.name AS role FROM user INNER JOIN role ON role.id = user.id_role WHERE user.id = ?', id, (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  },
  checkEmail: (email) => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT user.*, role.name AS role FROM user INNER JOIN role ON role.id = user.id_role WHERE user.email = ?', email, (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  },
  checkPassword: (password) => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT user.*, role.name AS role FROM user INNER JOIN role ON role.id = user.id_role WHERE user.password = ?', password, (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  },
  changePassword: (data, id) => {
    return new Promise((resolve, reject) => {
      conn.query('UPDATE user SET ? WHERE id = ?', [data, id], (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  }
}
