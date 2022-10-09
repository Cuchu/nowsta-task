const { getPosts, getPost, createPost } = require('../src/services/posts')

describe('Validate the correct work of the post services', () => {
  it('Should return the post list', async () => {
    const posts = await getPosts()
    expect(posts.length).toBe(3)
  })

  it('Should return one post', async () => {
    const post = await getPost({ id: 1 })
    expect(post.title).toBe('title post #1')
  })

  it('Should create a new post', async () => {
    const newPost = {
      title: 'Test Post',
      slug: 'This is a new post!',
      body: 'To develop',
      tags: [1],
    }
    const post = await createPost(newPost, { id: 1 })
    expect(post.title).toBe(newPost.title)
  })

  it('Should throw an error when the user is not authenticated on post creation action', async () => {
    const newPost = {
      title: 'Test Post',
      slug: 'This is a new post!',
      body: 'To develop',
      tags: [1],
    }
    await expect(createPost(newPost)).rejects.toThrow("Sorry, you're not an authenticated user!")
  })
})
