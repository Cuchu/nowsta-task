const { Op } = require('sequelize')
const { Tag, Post, User, sequelize, PostTags } = require('../db/models')
const throwExceptionIfUserNotAuth = require('../utils/throw-exception-if-user-not-auth')

const include = [
  { model: User, as: 'user' },
  { model: Tag, as: 'tags' },
]

const getPost = async args => Post.findOne({ where: args, include })

const getPosts = async () => Post.findAll({ include })

const createPost = async (args, user) => {
  throwExceptionIfUserNotAuth(user)
  const userId = user.id
  const tags = await getTags(args.tags)
  delete args.tags

  const post = await Post.create({ ...args, userId }, { include })
  await post.setTags(tags)

  return post.reload()
}

const editPost = async (args, user) => {
  throwExceptionIfUserNotAuth(user)
  const tags = await getTags(args.tags)
  delete args.tags

  const post = await Post.findOne({ where: { id: args.id, userId: user.id }, include })
  if (!post) throw new Error('Post not found!')

  await post.update(args)
  await post.setTags(tags)

  return post.reload()
}

const deletePost = async (args, user) => {
  throwExceptionIfUserNotAuth(user)

  const post = await Post.findOne({ where: { id: args.id, userId: user.id }, include })
  if (!post) throw new Error('Post not found!')

  await post.destroy()
  return post
}

const searchByText = async ({ search }) => {
  const searchInTags = `
        select DISTINCT("pt"."postId") from "Post_Tags" as "pt" 
        LEFT JOIN "Tags" as "t" ON "pt"."tagId" = "t"."id"
        WHERE "t"."name" ILIKE '%${search}%'
        `

  const postIdsByTag = await sequelize.query(searchInTags, { model: PostTags, mapToModel: false })

  const postIds = postIdsByTag.map(row => row.postId)

  const posts = await Post.findAll({
    where: {
      [Op.or]: [
        { title: { [Op.iLike]: `%${search}%` } },
        { slug: { [Op.iLike]: `%${search}%` } },
        { body: { [Op.iLike]: `%${search}%` } },
        { id: { [Op.in]: postIds } },
      ],
    },
    include,
  })

  return posts
}

const getTags = async tags => {
  return Tag.findAll({ where: { id: { [Op.in]: tags || [] } } })
}

module.exports = { getPost, getPosts, createPost, deletePost, editPost, searchByText }
