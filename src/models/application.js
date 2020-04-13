const conn = require('../configs/db')

module.exports = {
  createApplication: (data) => {
    return new Promise((resolve, reject) => {
      conn.query('ALTER TABLE application AUTO_INCREMENT = 0')
      conn.query('INSERT INTO application SET ?', data)
      conn.query('SELECT application.*, category.name AS category, label.name AS label FROM application INNER JOIN category ON category.id = application.id_category INNER JOIN label ON label.id = application.id_label', (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  },
  readApplication: (data) => {
    return new Promise((resolve, reject) => {
      const pageStart = ((data.page * data.limit) - data.limit)
      conn.query('SELECT application.*, category.name AS category, label.name AS label FROM application INNER JOIN category ON category.id = application.id_category INNER JOIN label ON label.id = application.id_label WHERE application.name LIKE "%' + data.name + '%" AND category.name LIKE "%' + data.category + '%" AND label.name LIKE "%' + data.label + '%" ORDER BY ' + data.sortBy + ' ASC LIMIT ' + pageStart + ',' + data.limit, (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  },
  updateApplication: (data, id) => {
    return new Promise((resolve, reject) => {
      conn.query('UPDATE application SET ? WHERE id = ?', [data, id])
      conn.query('SELECT application.*, category.name AS category, label.name AS label FROM application INNER JOIN category ON category.id = application.id_category INNER JOIN label ON label.id = application.id_label', (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  },
  deleteApplication: (id) => {
    return new Promise((resolve, reject) => {
      conn.query('DELETE FROM application WHERE id = ?', id)
      conn.query('SELECT application.*, category.name AS category, label.name AS label FROM application INNER JOIN category ON category.id = application.id_category INNER JOIN label ON label.id = application.id_label', (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  },
  detailApplication: (id) => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT application.*, category.name AS category, label.name AS label FROM application INNER JOIN category ON category.id = application.id_category INNER JOIN label ON label.id = application.id_label WHERE application.id = ?', id, (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  },
  checkApplication: (name) => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT application.*, category.name AS category, label.name AS label FROM application INNER JOIN category ON category.id = application.id_category INNER JOIN label ON label.id = application.id_label WHERE application.name = ?', name, (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  }
}
