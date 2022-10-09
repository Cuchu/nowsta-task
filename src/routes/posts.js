const { Router } = require('express')
const { Post } = require('../db/models')
const router = Router()

module.exports = app => {
  app.use('/posts', router)

  router.get('', async (_req, res) => {
    try {
      res.json({ posts: await Post.findAll() })
    } catch (e) {
      throw new Error(e.message)
    }
  })
}
