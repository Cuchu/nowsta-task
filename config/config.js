const { NODE_ENV } = process.env

const envName = ['development', 'test', 'production'].includes(NODE_ENV) ? NODE_ENV : 'development'

module.exports = {
  ...require(`../config/${envName}/credentials.js`),
}
