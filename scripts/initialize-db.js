const { User, Post, Tag, PostTags } = require('../src/db/models')
const bcrypt = require('bcryptjs')

if (require.main === module) execute().then()
async function execute() {
  await seed()
  process.exit()
}

async function seed() {
  const password = bcrypt.hashSync('sec-pass', 10)

  // create tables
  await User.sync({ force: true })
  await Post.sync({ force: true })
  await Tag.sync({ force: true })
  await PostTags.sync({ force: true })

  // insert data
  await Promise.all([
    // password: sec-pass
    User.create({ id: 1, email: 'user01@gmail.com', password }),
    User.create({ id: 2, email: 'user02@gmail.com', password }),
  ])

  const [tag1, tag2, tag3] = await Promise.all([
    Tag.create({ name: 'Music' }),
    Tag.create({ name: 'Art' }),
    Tag.create({ name: 'Tech' }),
  ])

  const [post1, post2] = await Promise.all([
    Post.create({
      title: 'title post #1',
      slug: 'slug #1',
      body: '<b>Body post #1<b>',
      userId: 1,
    }),
    Post.create({
      title: 'title post #2',
      slug: 'slug #2',
      body: '<b>Body post #2<b>',
      userId: 2,
    }),
    Post.create({
      title: 'title post #3',
      slug: 'slug #3',
      body: '<b>Body post #3<b>',
      userId: 2,
    }),
  ])

  await post1.addTags([tag1, tag2])
  await post2.addTag([tag1, tag3])
}

module.exports = seed
