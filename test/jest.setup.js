process.env.NODE_ENV = 'test'
const initializeDb = require('../scripts/initialize-db')

module.exports = async () => {
  await initializeDb()
}
