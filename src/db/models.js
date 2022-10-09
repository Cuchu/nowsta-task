const Sequelize = require('sequelize')
const { db } = require('../../config/config')

const sequelize = new Sequelize(db.database, db.username, db.password, db)

class User extends Sequelize.Model {}
User.init(
  {
    email: { type: Sequelize.STRING, allowNull: false },
    password: { type: Sequelize.STRING, allowNull: false },
  },
  { sequelize, modelName: 'User' },
)

class Post extends Sequelize.Model {}
Post.init(
  {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: Sequelize.STRING, allowNull: false },
    slug: { type: Sequelize.STRING, allowNull: true },
    body: { type: Sequelize.TEXT, allowNull: true },
  },
  { sequelize, modelName: 'Post' },
)

class Tag extends Sequelize.Model {}
Tag.init({ name: { type: Sequelize.STRING, allowNull: false } }, { sequelize, modelName: 'Tag' })

const PostTags = sequelize.define(
  'Post_Tags',
  {
    postId: { type: Sequelize.INTEGER, references: { model: Post, key: 'id' } },
    tagId: { type: Sequelize.INTEGER, references: { model: Tag, key: 'id' } },
  },
  { timestamps: false },
)

Post.belongsToMany(Tag, {
  through: PostTags,
  as: 'tags',
  foreignKey: 'postId',
  onDelete: 'cascade',
})
Tag.belongsToMany(Post, {
  through: PostTags,
  as: 'posts',
  foreignKey: 'tagId',
})
Post.belongsTo(User, { as: 'user', foreignKey: 'userId' })

module.exports = {
  sequelize,
  User,
  Post,
  Tag,
  PostTags,
}
