module.exports = user => {
  if (!user) throw new Error("Sorry, you're not an authenticated user!")
}
