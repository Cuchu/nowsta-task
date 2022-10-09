const express = require('express')
const auth = require('./middlewares/auth')
const test = require('./routes/test')

const app = express()
app.use(auth)
test(app)

module.exports = app
