import jwt from 'jsonwebtoken'

const config = {
  authSecret: 'secret' // jwttoken secret
}

module.exports = config

// check user login
module.exports.isAuthenticated = function (request, response, next) {
  const token = request.header.authorization
  if (token) {
    jwt.verify(token.replace(/^Bearer\s/, ''), config.authSecret, (error, decoded) => {
      if (error) {
        return response.status(400).json({ message: 'user unauthorized' })
      } else {
        return next()
      }
    })
  } else {
    return response.status(400).json({ message: 'invalid token' })
  }
}
