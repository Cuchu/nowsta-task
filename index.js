const app = require('./src/app')
const apolloServer = require('./src/apollo-server')
const port = process.env.PORT || 3001

app.listen(port, async () => {
  await apolloServer.start()
  apolloServer.applyMiddleware({ app })
  console.log(`Express App Listening on Port ${port}`)
})

module.exports = app
