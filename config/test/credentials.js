const pg = require('pg')
module.exports = {
  db: {
    username: 'postgres',
    password: 'postgres',
    database: 'test',
    host: 'localhost',
    dialect: 'postgres',
    dialectModule: pg,
  },
  jwt: {
    accessSecret: 'eyJhbGciOiJIUzI1NiJ9',
  },
}
