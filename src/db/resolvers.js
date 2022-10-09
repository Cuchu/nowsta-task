const { login, getCurrentUser } = require('../services/users')
const { getTag, getTags, createTag } = require('../services/tags')
const {
  getPost,
  getPosts,
  createPost,
  editPost,
  deletePost,
  searchByText,
} = require('../services/posts')

const resolvers = {
  Query: {
    async me(_, _args, { user }) {
      return await getCurrentUser(user)
    },
    async post(_, args) {
      return await getPost(args)
    },
    async posts() {
      return await getPosts()
    },
    async tag(_, args) {
      return await getTag(args)
    },
    async tags() {
      return await getTags()
    },
    async searchByText(_, args) {
      return await searchByText(args)
    },
  },

  Mutation: {
    async login(_, args) {
      return await login(args)
    },
    async createPost(_, args, { user }) {
      return await createPost(args, user)
    },
    async editPost(_, args, { user }) {
      return await editPost(args, user)
    },
    async deletePost(_, args, { user }) {
      return await deletePost(args, user)
    },
    async createTag(_, args, { user }) {
      return await createTag(args, user)
    },
  },
}

module.exports = resolvers
