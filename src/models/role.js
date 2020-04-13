const conn = require('../configs/db')

module.exports = {
  createRole: (data) => {
    return new Promise((resolve, reject) => {
      conn.query('ALTER TABLE role AUTO_INCREMENT = 0')
      conn.query('INSERT INTO role SET ?', data)
      conn.query('SELECT * FROM role', data, (err, result) => {
        if (err) reject(new (Error)())
        resolve(result)
      })
    })
  },
  readRole: () => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT * FROM role', (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  },
  updateRole: (data, id) => {
    return new Promise((resolve, reject) => {
      conn.query('UPDATE role SET ? WHERE id = ?', [data, id])
      conn.query('SELECT * FROM role', (err, result) => {
        if (err) reject(new (Error)())
        resolve(result)
      })
    })
  },
  deleteRole: (id) => {
    return new Promise((resolve, reject) => {
      conn.query('DELETE FROM role WHERE id = ?', id)
      conn.query('SELECT * FROM role', (err, result) => {
        if (err) reject(new (Error)())
        resolve(result)
      })
    })
  },
  detailRole: (id) => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT * FROM role WHERE id = ?', id, (err, result) => {
        if (err) reject(new (Error)())
        resolve(result)
      })
    })
  }
}
