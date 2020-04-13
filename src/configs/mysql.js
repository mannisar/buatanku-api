require('dotenv/config')

module.exports = {
  db: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  },
  url: process.env.URL,
  port: process.env.PORT,
  JWT_KEY: process.env.JWT_KEY
}
