const pg = require('pg')
module.exports = {
  db: {
    username: process.env.DBUSERNAME || 'postgres',
    password: process.env.DBPASSWORD || 'postgres',
    database: process.env.DATABASE || 'development',
    host: process.env.DBHOST || 'localhost',
    dialect: 'postgres',
    dialectModule: pg,
  },
  jwt: {
    accessSecret: 'eyJhbGciOiJIUzI1NiJ9',
  },
}
