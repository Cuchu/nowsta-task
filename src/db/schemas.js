const { gql } = require('apollo-server-express')

const typeDefs = gql`
  scalar dateScalar
  type User {
    id: Int
    email: String
    createdAt: String
  }

  type Post {
    id: Int
    title: String
    slug: String
    body: String
    user: User
    tags: [Tag]
    createdAt: dateScalar
    updatedAt: dateScalar
  }

  type Tag {
    id: Int
    name: String
    posts: [Post]
  }

  type Query {
    me: User
    post(id: Int!): Post
    posts: [Post]
    tag(id: Int!): [Tag]
    tags: [Tag]
    searchByText(search: String!): [Post]
  }

  type Mutation {
    login(email: String!, password: String!): String
    createPost(title: String!, slug: String, body: String, tags: [Int]): Post
    editPost(id: Int!, title: String!, slug: String, body: String, tags: [Int]): Post
    deletePost(id: Int!): Post
    createTag(name: String!): Tag
  }
`

module.exports = typeDefs
