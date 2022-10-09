const express = require('express')
const auth = require('./middlewares/auth')
const posts = require('./routes/posts')

const app = express()
app.use(auth)
posts(app)

module.exports = app
