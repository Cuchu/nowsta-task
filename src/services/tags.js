const { Tag, Post, User } = require('../db/models')
const throwExceptionIfUserNotAuth = require('../utils/throw-exception-if-user-not-auth')

const include = { model: Post, as: 'posts', include: { model: User, as: 'user' } }

const getTag = async args => Tag.findOne({ where: args, include })

const getTags = async () => Tag.findAll({ include })

const createTag = async (args, user) => {
  throwExceptionIfUserNotAuth(user)

  const tag = await Tag.create(args, { include })
  return tag.reload()
}

module.exports = { getTag, getTags, createTag }
