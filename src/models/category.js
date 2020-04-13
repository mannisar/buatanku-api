const conn = require('../configs/db')

module.exports = {
  createCategory: (data) => {
    return new Promise((resolve, reject) => {
      conn.query('ALTER TABLE category AUTO_INCREMENT = 0')
      conn.query('INSERT INTO category SET ?', data)
      conn.query('SELECT * FROM category', data, (err, result) => {
        if (err) reject(new (Error)())
        resolve(result)
      })
    })
  },
  readCategory: () => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT * FROM category', (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  },
  updateCategory: (data, id) => {
    return new Promise((resolve, reject) => {
      conn.query('UPDATE category SET ? WHERE id = ?', [data, id])
      conn.query('SELECT * FROM category', (err, result) => {
        if (err) reject(new (Error)())
        resolve(result)
      })
    })
  },
  deleteCategory: (id) => {
    return new Promise((resolve, reject) => {
      conn.query('DELETE FROM category WHERE id = ?', id)
      conn.query('SELECT * FROM category', (err, result) => {
        if (err) reject(new (Error)())
        resolve(result)
      })
    })
  },
  detailCategory: (id) => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT * FROM category WHERE id = ?', id, (err, result) => {
        if (err) reject(new (Error)())
        resolve(result)
      })
    })
  }
}
