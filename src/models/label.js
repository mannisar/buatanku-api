const conn = require('../configs/db')

module.exports = {
  createLabel: (data) => {
    return new Promise((resolve, reject) => {
      conn.query('ALTER TABLE label AUTO_INCREMENT = 0')
      conn.query('INSERT INTO label SET ?', data)
      conn.query('SELECT * FROM label', data, (err, result) => {
        if (err) reject(new (Error)())
        resolve(result)
      })
    })
  },
  readLabel: () => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT * FROM label', (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  },
  updateLabel: (data, id) => {
    return new Promise((resolve, reject) => {
      conn.query('UPDATE label SET ? WHERE id = ?', [data, id])
      conn.query('SELECT * FROM label', (err, result) => {
        if (err) reject(new (Error)())
        resolve(result)
      })
    })
  },
  deleteLabel: (id) => {
    return new Promise((resolve, reject) => {
      conn.query('DELETE FROM label WHERE id = ?', id)
      conn.query('SELECT * FROM label', (err, result) => {
        if (err) reject(new (Error)())
        resolve(result)
      })
    })
  },
  detailLabel: (id) => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT * FROM label WHERE id = ?', id, (err, result) => {
        if (err) reject(new (Error)())
        resolve(result)
      })
    })
  }
}
