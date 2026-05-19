const authMiddleware = (req, res, next) => {
  next()

  // Future authentication placeholder:
  // const token = req.headers.authorization?.replace('Bearer ', '')
  // verify token and reject unauthorized requests.
}

module.exports = {
  authMiddleware,
}
