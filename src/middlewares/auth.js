const jsonwebtoken = require('jsonwebtoken')
const { jwt } = require('../../config/config')
module.exports = async (req, _, next) => {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    const token = req.headers.authorization.split(' ')[1]
    try {
      req.headers.user = jsonwebtoken.verify(token, jwt.accessSecret)
    } catch (e) {}
  }

  next()
}
