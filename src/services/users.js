const bcrypt = require('bcryptjs')
const jsonwebtoken = require('jsonwebtoken')
const { User } = require('../db/models')
const { jwt } = require('../../config/config')
const throwExceptionIfUserNotAuth = require('../utils/throw-exception-if-user-not-auth')

const login = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } })

  if (!user) throw new Error('This user does not exist. Please, make sure to type the right login.')

  const valid = await bcrypt.compare(password, user.password)

  if (!valid) throw new Error('You password is incorrect!')

  return jsonwebtoken.sign({ id: user.id, email: user.email }, jwt.accessSecret, {
    expiresIn: '1d',
  })
}

const getCurrentUser = async user => {
  throwExceptionIfUserNotAuth(user)
  return User.findOne({ where: { id: user.id } })
}

module.exports = { login, getCurrentUser }
