const validation = require('express-validator')
const Community = require('../models/Community')

module.exports.list = (request, response, next) {
  Community.find({}, (error, articles) => {
    if (error) {
      return response.status(500).json({
        message: 'Failed to retrieve data.'
      })
    }
    return response.json()
  })
}