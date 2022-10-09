const { ApolloServer } = require('apollo-server-express')
const { makeExecutableSchema } = require('@graphql-tools/schema')
const typeDefs = require('./db/schemas')
const resolvers = require('./db/resolvers')

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

const server = new ApolloServer({
  context: ({ req }) => ({ user: req.headers.user ?? null }),
  schema,
  introspection: true,
  playground: {
    endpoint: '/graphql',
  },
})

module.exports = server
