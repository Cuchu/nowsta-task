const pg = require('pg')
module.exports = {
  db: {
    username: process.env.DBUSERNAME,
    password: process.env.DBPASSWORD,
    database: process.env.DATABASE,
    host: process.env.DBHOST,
    dialect: 'postgres',
    dialectModule: pg,
  },
  jwt: {
    accessSecret: process.env.JWTSECRET,
  },
}
