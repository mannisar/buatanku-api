const { db } = require('./mysql')
const mysql = require('mysql')

const conn = mysql.createConnection(db)

conn.connect((err) => {
  if (err) {
    console.log(`DATABASE CONNECTION FAILED: ${db.database}`)
  } else {
    console.log(`DATABASE CONNECTION SUCCESSFUL: ${db.database}`)
  }
})

module.exports = conn
