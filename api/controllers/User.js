const validation = require('express-validator')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const config = require('../config')
const User = require('../models/User')

module.exports.register = [
  validation.body('name', 'Please enter your name').isLength({ min: 1 }),
  validation.body('email', 'Enter an email').isLength({ min: 1 }),
  validation.body('email').custom((value) => {
    return User.findOne({ email: value })
      .then((user) => {
        if (user !== null) {
          // eslint-disable-next-line prefer-promise-reject-errors
          return Promise.reject('Email already exist')
        }
      })
  }),
  validation.body('password', 'Invalid password').isLength({ min: 1 }),

  (request, response) => {
    const error = validation.validationResult(request)
    if (!error.isEmpty()) {
      return response.status(400).json({ errors: error.mapped() })
    }

    const user = new User({
      name: request.body.name,
      email: request.body.email,
      password: request.body.password
    })

    const salt = bcrypt.genSaltSync(16)
    const hash = bcrypt.hashSync(user.password, salt)

    user.password = hash

    user.save((error, user) => {
      if (error) {
        return response.status(500).json({
          message: 'Failed to register',
          error
        })
      }
      return response.json({
        message: 'User successfuly saved',
        _id: user.id
      })
    })
  }
]

module.exports.login = [
  validation.body('email', 'Enter an email').isLength({ min: 1 }),
  validation.body('password', 'Invalid password').isLength({ min: 1 }),

  (request, response) => {
    const error = validation.validationResult(request)
    if (!error.isEmpty()) {
      return response.status(400).json({ errors: error.mapped() })
    }

    User.findOne({ email: request.body.email }, (error, user) => {
      if (error) {
        return response.status(500).json({
          message: 'Failed to login',
          error
        })
      }

      if (user === null) {
        return response.status(500).json({
          message: 'This user does not exist!'
        })
      }

      return bcrypt.compare(request.body.password, user.password, (error, match) => {
        if (match === false) {
          return response.status(500).json({
            message: 'Invalid Email or Password entered.',
            error
          })
        } else {
          return response.json({
            user: {
              _id: user._id,
              email: user.email,
              name: user.name
            },
            token: jwt.sign(
              {
                _id: user._id,
                email: user.email,
                name: user.name
              },
              config.authSecret)
          })
        }
      })
    })
  }
]

module.exports.user = (request, response) => {
  const token = request.headers.authorization
  if (token) {
    jwt.verify(
      token.replace(/^Bearer\s/, ''),
      config.authSecret,
      (error, decoded) => {
        if (error) {
          return response.status(400).json({ message: 'Unauthorized' })
        } else {
          return response.json({ user: decoded })
        }
      }
    )
  } else {
    return response.status(400).json({ message: 'Unauthorized' })
  }
}
