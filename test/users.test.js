const { login } = require('../src/services/users')

describe('Validate the correct work of the user login service', () => {
  it('Should login correctly for user01@gmail.com and get a token', async () => {
    const token = await login({ email: 'user01@gmail.com', password: 'sec-pass' })
    expect(token).toEqual(expect.any(String))
  })

  it('Should throw and exception when user does not exist', async () => {
    await expect(login({ email: 'user@gmail.com', password: 'sec' })).rejects.toThrow(
      'This user does not exist. Please, make sure to type the right login.',
    )
  })

  it('Should throw and exception when password is wrong', async () => {
    await expect(login({ email: 'user01@gmail.com', password: 'sec' })).rejects.toThrow(
      'You password is incorrect!',
    )
  })
})
